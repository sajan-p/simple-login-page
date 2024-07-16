const tokenValidation = require("../../middleware/tokenValidation");
const User = require("../../models/user");
const { rateLimit } = require("express-rate-limit");
const express = require("express");
const updatePasswordValidation = require("../../middleware/updatePasswordValidation");
const updateInfoValidation = require("../../middleware/updateInfoValidation");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");

const Image = require("../../models/image");
const bodyParser = require("body-parser");
const fs = require("fs");

const router = express.Router();

const updatePfpLimiter = rateLimit({
  windowMs: 0.01 * 60 * 1000,
  limit: 5,
});

const storage = multer.memoryStorage();
const targetDirectory = path.join(__dirname + "/data/uploads/");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../../../public/images"));
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(
//       null,
//       uniqueSuffix +
//         file.fieldname +
//         "_" +
//         Date.now() +
//         path.extname(file.originalname)
//     );
//   },
// });

const upload = multer({ storage });

// router.post(
//   "/update-pfp",
//   tokenValidation,
//   updatePfpLimiter,
//   upload.single("image"),
//   async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ error: "No file uploaded" });
//       }

//       // Validate image format
//       const imageMimeType = req.file.mimetype;
//       const allowedMimeTypes = ["image/jpeg", "image/png"]; // Add other supported types as needed

//       if (!allowedMimeTypes.includes(imageMimeType)) {
//         return res.status(400).json({ error: "Invalid image format" });
//       }

//       // Check the image buffer length
//       if (req.file.buffer.length === 0) {
//         return res.status(400).json({ error: "Empty image file" });
//       }

//       sharp(req.file.buffer)
//         .resize({ width: 100, height: 100, fit: "cover" })
//         .toFile("output.jpg", async (err, info) => {
//           if (err) {
//             console.error("Image processing error:", err);
//             return res.status(500).json({ error: "Image processing failed" });
//           }

//           const imageName = req?.file?.filename;

//           try {
//             const pfp = await Image.create({
//               image: req.file,
//               name: imageName,
//             });
//             console.log("Image saved successfully");
//             res.json({ status: "ok" });
//           } catch (error) {
//             console.error("Image saving error:", error);
//             res.json({ status: error });
//           }
//         });
//     } catch (error) {
//       console.error("Route handler error:", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }
// );

router.post(
  "/update-pfp",
  tokenValidation,
  updatePfpLimiter,
  upload.single("image"),
  async (req, res) => {
    const fileName = Date.now() + path.extname(req.file.originalname);

    fs.access(targetDirectory, (err) => {
      if (err) {
        fs.mkdirSync(targetDirectory);
      }
    });

    const newPfp = await sharp(req.file.buffer)
      .resize({ width: 500, height: 500 })
      .toBuffer();

    try {
      const user = await User.findOne({ email: req.user });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const newPfpBase64 = newPfp.toString("base64");

      user.pfp = {
        data: newPfpBase64,
        contentType: "image/png",
      };
      const updatedUser = await user.save();

      console.log("Image saved successfully");
      res.status(200).json({
        errors: [],
        data: {
          user: {
            id: updatedUser.id,
            email: updatedUser.email,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            pfp: updatedUser.pfp,
          },
        },
      });
    } catch (error) {
      console.error("Image saving error:", error);
      res.json({ status: error });
    }
  }
);

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

module.exports = router;
