const mongoose = require("mongoose");
const ENV = require("./env.js");
const logger = require("../utils/logger.js");

/**
 * Connects to the MongoDB database using the connection string from the environment variables.
 *
 * @async
 * @function connect
 * @returns {Promise<void>}
 */
const connect = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    logger.info("Database connected");
  } catch (error) {
    logger.error("Database connection failed", error);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connect;
