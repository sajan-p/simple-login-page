const User = require("../models/user");

const emailValidation = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        errors: [{ type: "email", msg: "Email already exists" }],
        data: null,
      });
    } else {
      next();
    }
  } catch (err) {
    res.send("Error validating email.");
  }
};

module.exports = emailValidation;
