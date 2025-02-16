// modules
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const ENV = require("./config/env.js");
const connectDB = require("./config/db.js");
const routes = require("./routes/index.js");
const errorHandler = require("./middlewares/errorHandler.js");
const rateLimiter = require("./middlewares/rateLimiter.js");
const requestIp = require("request-ip");
const requestsLogger = require("./middlewares/requestsLogger.js");
const logger = require("./utils/logger.js");

// set environment variables
process.env.MAIN_PATH = ENV.MAIN_PATH;
process.env.UV_THREADPOOL_SIZE = ENV.UV_THREADPOOL_SIZE;

// connect to database
connectDB();

// http web server main instance
const app = express();

// security middleware configs
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rate limiter middleware
app.use(requestIp.mw());
app.use(rateLimiter);

// set the port in main of application
app.set("port", ENV.PORT);

// routes logger
app.use(requestsLogger);

// routes
app.use("/api", routes);

// error handler middleware
app.use(errorHandler);

app.listen(app.get("port"), () => {
  logger.info(`Server running on port ${app.get("port")}`);
});
