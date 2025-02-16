const errorTypes = {
  PRODUCT__NOT_FOUND: "PRODUCT__NOT_FOUND",
  PRODUCT__ALREADY_EXISTS: "PRODUCT__ALREADY_EXISTS",
  // Internal server error
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  // Validation error
  VALIDATION_ERROR: "VALIDATION_ERROR",
  // Rate limiter error
  RATE_LIMITER: "RATE_LIMITER",
};

const errorMessages = {
  [errorTypes.PRODUCT__NOT_FOUND]: "Product not found",
  [errorTypes.PRODUCT__ALREADY_EXISTS]: "Product already exists",
  [errorTypes.INTERNAL_SERVER_ERROR]: "Internal server error",
  [errorTypes.VALIDATION_ERROR]: "Validation failed",
  [errorTypes.RATE_LIMITER]:
    "Too many requests from this IP, please try again after 15 minutes",
};

module.exports = {
  errorTypes,
  errorMessages,
};
