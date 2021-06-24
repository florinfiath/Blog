const { body } = require("express-validator");

// before module.exports (when using non-express router design)

exports.userValidationRules = [
  body("email").isEmail().withMessage("Your email is not correct"),
  body("firstName").notEmpty().withMessage("Missing first name"),
  body("lastName").notEmpty(),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Your password should have minimum 8 characters"),
];
