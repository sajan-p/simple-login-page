const express = require("express");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const { rateLimit } = require("express-rate-limit");

const signupValidation = require("../../middleware/signupValidation");
const emailValidation = require("../../middleware/emailValidation");
const authCodeValidation = require("../../middleware/authCodeValidation");

const User = require("../../models/user");

const router = express.Router();

const signupLimiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  limit: 5,
});

router.post(
  "/signup",
  signupLimiter,
  signupValidation,
  emailValidation,
  authCodeValidation,
  async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      pfp: "https://s.gravatar.com/avatar/1d3b36dd72493368071ebb88e969479c?d=mm",
    });

    const token = await JWT.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });

    res.status(200).json({
      errors: [],
      data: {
        token,
        user: {
          id: newUser.id,
          email,
          firstName,
          lastName,
          pfp: newUser.pfp,
        },
      },
    });
  }
);

module.exports = router;
