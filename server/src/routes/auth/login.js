const express = require("express");
const JWT = require("jsonwebtoken");
const { rateLimit } = require("express-rate-limit");

const loginValidation = require("../../middleware/loginValidation");

const User = require("../../models/user");

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 0.01 * 60 * 1000,
  limit: 3,
});

router.post("/login", loginLimiter, loginValidation, async (req, res) => {
  const { email } = req.body;

  const token = JWT.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: 360000,
  });

  const user = await User.findOne({ email });
  return res.json({
    errors: [],
    data: {
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        pfp: user.pfp,
      },
    },
  });
});

module.exports = router;
