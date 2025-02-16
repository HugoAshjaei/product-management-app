const router = require("express").Router();
const coloursRoutes = require("./colours/coloursRoutes.js");

router.use("/colours", coloursRoutes);

module.exports = router;
