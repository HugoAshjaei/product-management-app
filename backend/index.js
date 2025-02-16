// modules
const express = require("express");
const helmet = require("helmet");
const { cpus } = require("os");
const cors = require("cors");

// set environment variables
process.env.MAIN_PATH = process.cwd();
process.env.UV_THREADPOOL_SIZE = String(cpus().length);

// http web server main instance
const app = express();

// security middleware configs
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the port in main of application
app.set("port", 4000);

// routes
app.use("/ping", (req, res) => {
  res.send("pong");
});

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
