const router = require("express").Router();
const coloursRoutes = require("./colours/coloursRoutes.js");
const productTypesRoutes = require("./productTypes/productTypesRoutes.js");

router.use("/colours", coloursRoutes);
router.use("/productTypes", productTypesRoutes);

module.exports = router;
