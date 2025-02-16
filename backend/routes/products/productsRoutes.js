const router = require("express").Router();
const productsControllers = require("../../controllers/products/productsControllers.js");

router.get("/list", productsControllers.listProducts);

module.exports = router;
