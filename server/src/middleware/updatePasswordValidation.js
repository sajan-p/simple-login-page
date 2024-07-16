const bcrypt = require("bcryptjs");
const User = require("../models/user");

const updatePasswordValidation = async (req, res, next) => {
  if (req.body.oldPassword == "") {
    next();
    return;
  }

  const { email, oldPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.json({
        errors: [{ type: "email", msg: "Invalid credentails" }],
        data: null,
      });
    }

    const isCorrectPassword = await bcrypt.compare(
      oldPassword,
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

module.exports = updatePasswordValidation;
