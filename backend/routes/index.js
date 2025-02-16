const router = require("express").Router();
const coloursRoutes = require("./colours/coloursRoutes.js");
const productTypesRoutes = require("./productTypes/productTypesRoutes.js");
const productsRoutes = require("./products/productsRoutes.js");

router.use("/colours", coloursRoutes);
router.use("/productTypes", productTypesRoutes);
router.use("/products", productsRoutes);

module.exports = router;
