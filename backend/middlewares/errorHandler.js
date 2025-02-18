const { errorTypes, errorMessages } = require("../constants/errors.js");
const logger = require("../utils/logger.js");

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  logger.error(err.message, err);
  res.status(500).json({
    type: errorTypes.INTERNAL_SERVER_ERROR,
    message: errorMessages[errorTypes.INTERNAL_SERVER_ERROR],
  });
};

module.exports = errorHandler;
