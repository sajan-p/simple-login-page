const express = require("express");
const mail = require("../../utils/mail");
const { rateLimit } = require("express-rate-limit");

const signupValidation = require("../../middleware/signupValidation");
const emailValidation = require("../../middleware/emailValidation");
const authCodeValidation = require("../../middleware/authCodeValidation");

const authCode = require("../../models/authCode");

const router = express.Router();

const generateCode = (codeLength) => {
  let code = "";

  for (let i = 0; i < codeLength; i++) {
    code += String(Math.floor(Math.random() * 10));
  }

  return code;
};

const codeLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 3,
});

router.post(
  "/send-code",
  codeLimiter,
  signupValidation,
  emailValidation,
  async (req, res) => {
    const { email } = req.body;

    const code = generateCode(6);

    try {
      const updatedAuthCode = await authCode.findOneAndUpdate(
        { email },
        { $set: { code } },
        { upsert: true, new: true }
      );

      if (!updatedAuthCode) {
        res.status(500).send("Error creating or updating code.");
      }

      const mailOptions = {
        from: process.env.MAILER_EMAIL,
        to: email,
        subject: "App Verification Code",
        html: `Your verification code is ${code}`,
        text: `Your verification code is ${code}`,
      };

      console.log("Code: " + code);
      // mail(mailOptions);

      res.json({
        errors: [],
        data: {},
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating or updating code.");
    }
  }
);

module.exports = router;
