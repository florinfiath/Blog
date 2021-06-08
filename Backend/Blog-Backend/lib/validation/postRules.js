const { body } = require("express-validator");

exports.postValidationRules = [
  body("title").notEmpty(),
  body("content").notEmpty(),
];
