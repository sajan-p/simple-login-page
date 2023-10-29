const AuthCode = require("../models/authCode");

const authCodeValidation = async (req, res, next) => {
  const { email, code } = req.body;
  try {
    const answer = await AuthCode.findOne({ email });

    if (!answer) {
      return res.status(409).json({
        errors: [{ type: "email", msg: "Email does not have code" }],
        data: null,
      });
    }

    if (answer.code != code) {
      return res.json({
        errors: [{ type: "code", msg: "Code is invalid" }],
        data: null,
      });
    }

    await AuthCode.deleteOne({ email });

    next();
  } catch (err) {
    console.log(err);
    res.status(500).send("Error validating code.");
  }
};

module.exports = authCodeValidation;
