const { errorTypes, errorMessages } = require("../constants/errors.js");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    type: errorTypes.INTERNAL_SERVER_ERROR,
    message: errorMessages[errorTypes.INTERNAL_SERVER_ERROR],
  });
};

module.exports = errorHandler;
