const router = require("express").Router();
const coloursControllers = require("../../controllers/colours/coloursControllers.js");

router.get("/list", coloursControllers.listColours);

module.exports = router;
