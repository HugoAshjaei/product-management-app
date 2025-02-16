// modules
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const ENV = require("./config/env.js");

// set environment variables
process.env.MAIN_PATH = ENV.MAIN_PATH;
process.env.UV_THREADPOOL_SIZE = ENV.UV_THREADPOOL_SIZE;

// http web server main instance
const app = express();

// security middleware configs
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the port in main of application
app.set("port", ENV.PORT);

// routes
app.use("/ping", (req, res) => {
  res.send("pong");
});

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
