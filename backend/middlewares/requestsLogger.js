const logger = require("../utils/logger.js");

const logRequests = (req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};

module.exports = logRequests;
