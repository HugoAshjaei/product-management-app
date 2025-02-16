const errorTypes = {
  PRODUCT__NOT_FOUND: "PRODUCT__NOT_FOUND",
  PRODUCT__ALREADY_EXISTS: "PRODUCT__ALREADY_EXISTS",

  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",

  VALIDATION_ERROR: "VALIDATION_ERROR",
};

const errorMessages = {
  [errorTypes.PRODUCT__NOT_FOUND]: "Product not found",
  [errorTypes.PRODUCT__ALREADY_EXISTS]: "Product already exists",

  [errorTypes.INTERNAL_SERVER_ERROR]: "Internal server error",

  [errorTypes.VALIDATION_ERROR]: "Validation failed",
};

module.exports = {
  errorTypes,
  errorMessages,
};
