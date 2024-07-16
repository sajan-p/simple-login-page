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

router.post(
  "/remove-pfp",
  tokenValidation,
  updatePfpLimiter,
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.user });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      user.pfp = {
        data: "/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAUABQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+uKKKKACiiigAoq9Y6FqOprutLG4uE/vRxEr+fSlvtB1LTU33VhcW6f35IiF/PpQBQooooAKKKKACiiigAr1LwB8O4fssWp6pEJXkAeG3cfKo7Mw7k+n+RwXhbTl1bxFp9q4zHJKN49VHJH5A19CgYGB0oAFUIoVQFUcADoKGUMCCAQeCDS0UAec+Pvh3BJay6lpcQimjBeW3QYVx3Kjsfbv9evlVfTdfPfi7TV0nxLqFrGNsaSkoo7Kw3AfkaAMiiiigAooooA2vBl6mn+KdNnc4QTBST2DfLn9a+ga+ZOlez+AfHMOuWkVldyhNSjG35j/AK4DuPf1H40AdpRRRQAV4D44vU1DxZqUyHKebsBHfaAv9K9N8eeOYdAs5LS1kD6lINoCnPkg/wAR9/QV4qSSSSck0AFFFFABRRU1naS393DbQIXmlYIijuTQBc0Dw/eeI75bWzj3Hq8jcKg9Sa9g8OfDzS9AVJHjF5eDkzTDIB/2V6D+fvWl4X8OQeGdKjtYgGkPzSy45du5+npWvQAUUUUAcv4k+Hml6+ryLGLO8PPnQjAJ/wBpeh/n7149r/h+88OXzWt5HtPVJF5Vx6g19E1keKPDkHibSpLWUBZB80UuOUbsfp60AfPdFTXlpLYXc1tOhSaJijqexFQ0AFeg/CHRhc6nc6jIuVtl2R5/vt1P4D+defV7T8KbUW/hNJAOZ5ncn6Hb/wCy0AdlRRRQAUUUUAFFFFAHkvxe0YW2p22oxrhbldkmP769D+I/lXn1e0/Fa1Fx4TeQjmCZHB+p2/8As1eLUAf/2Q==",
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
