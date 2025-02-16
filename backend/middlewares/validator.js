const { errorTypes, errorMessages } = require("../constants/errors.js");
const details = require("../validators/products/fields/details.js");

const validator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate({
      body: req.body,
      params: req.params,
      query: req.query,
    });
    if (error) {
      return res.status(400).json({
        type: errorTypes.VALIDATION_ERROR,
        message: errorMessages[errorTypes.VALIDATION_ERROR],
        details: error.details,
      });
    }
    next();
  };
};

module.exports = validator;
