const tokenValidation = require("../../middleware/tokenValidation");
const User = require("../../models/user");
const { rateLimit } = require("express-rate-limit");
const express = require("express");
const updatePasswordValidation = require("../../middleware/updatePasswordValidation");
const updateInfoValidation = require("../../middleware/updateInfoValidation");
const multer = require("multer");

const bodyParser = require("body-parser");

const router = express.Router();

const updateLimiter = rateLimit({
  windowMs: 0.01 * 60 * 1000,
  limit: 5,
});

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post(
  "/update",
  // updateLimiter,
  // tokenValidation,
  // updatePasswordValidation,
  // updateInfoValidation,
  async (req, res) => {
    console.log(req.body);
    res.redirect(307, "/auth/update-pfp");
    // const { newPassword, firstName, lastName, picture, email } = req.body;
    // console.log(req.body);
    // const user = await User.findOne({ email: req.user });
    // if (req.body.changedPicture) {
    //   res.redirect(307, "/auth/update-pfp");
    // } else {
    //   if (req.body.oldPassword == "") {
    //     user.firstName = firstName;
    //     user.lastName = lastName;
    //   } else {
    //     user.firstName = firstName;
    //     user.lastName = lastName;
    //     const hashedPassword = await bcrypt.hash(newPassword, 10);
    //     user.password = hashedPassword;
    //   }
    //   user.save();
    //   const token = JWT.sign({ req: req.user }, process.env.JWT_SECRET, {
    //     expiresIn: 360000,
    //   });
    //   res.status(200).json({
    //     errors: [],
    //     data: {
    //       token,
    //       user: {
    //         id: user.id,
    //         email,
    //         firstName,
    //         lastName,
    //         pfp: user.pfp,
    //       },
    //     },
    //   });
    // }
  }
);

module.exports = router;
