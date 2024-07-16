const { body, validationResult } = require("express-validator");

const signupValidation = async (req, res, next) => {
  const validationRules = [
    body("email").isEmail().withMessage("The email is invalid"),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("The password must be longer than 5 characters"),
    body("firstName")
      .isLength({ min: 1 })
      .withMessage("This field is required"),
    body("lastName").isLength({ min: 1 }).withMessage("This field is required"),
  ];

  try {
    await Promise.all(validationRules.map((rule) => rule.run(req)));

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((err) => {
        return {
          msg: err.msg,
          type: err.path,
        };
      });

      return res.json({ errors, data: null });
    }

    next();
  } catch (err) {
    return res
      .status(500)
      .json({ errors: { msg: "Error signing up." }, data: null });
  }
};

module.exports = signupValidation;
