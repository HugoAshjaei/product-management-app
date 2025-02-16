const mongoose = require("mongoose");
const ENV = require("./env.js");

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
    console.log("Database connected");
  } catch (error) {
    console.error(error);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connect;
