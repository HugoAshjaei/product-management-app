const { errorTypes, errorMessages } = require("../constants/errors.js");
const logger = require("../utils/logger.js");

const errorHandler = (err, req, res) => {
  logger.error(err.message, err);
  res.status(500).json({
    type: errorTypes.INTERNAL_SERVER_ERROR,
    message: errorMessages[errorTypes.INTERNAL_SERVER_ERROR],
  });
};

module.exports = errorHandler;
