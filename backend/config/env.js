const { cpus } = require("os");

// Load environment variables
require("dotenv").config();

const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 4000,
  MONGO_URI:
    process.env.MONGO_URI || "mongodb://localhost:27017/product-management",
  MAIN_PATH: process.cwd(),
  UV_THREADPOOL_SIZE: cpus().length,
};

module.exports = ENV;
