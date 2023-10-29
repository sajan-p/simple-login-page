const bcrypt = require("bcryptjs");
const User = require("../models/user");

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("C");

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.json({
        errors: [{ type: "email", msg: "Invalid credentails" }],
        data: null,
      });
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isCorrectPassword) {
      return res.json({
        errors: [{ type: "email", msg: "Invalid credentails" }],
        data: null,
      });
    }

    next();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ errors: { msg: "Error logging in." }, data: null });
  }
};

module.exports = loginValidation;
