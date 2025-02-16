const rateLimit = require("express-rate-limit");
const { errorTypes, errorMessages } = require("../constants/errors.js");

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    errorType: errorTypes.RATE_LIMITER,
    message: errorMessages[errorTypes.RATE_LIMITER],
  },
});

module.exports = rateLimiter;
