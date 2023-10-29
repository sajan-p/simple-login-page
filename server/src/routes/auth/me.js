const tokenValidation = require("../../middleware/tokenValidation");
const User = require("../../models/user");
const { rateLimit } = require("express-rate-limit");
const express = require("express");

const router = express.Router();

const meLimiter = rateLimit({
  windowMs: 0.01 * 60 * 1000,
  limit: 5,
});

router.get("/me", meLimiter, tokenValidation, async (req, res) => {
  const user = await User.findOne({ email: req.user });

  return res.json({
    errors: [],
    data: {
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
