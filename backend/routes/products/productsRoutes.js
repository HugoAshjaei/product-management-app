const router = require("express").Router();
const productsControllers = require("../../controllers/products/productsControllers.js");

router.get("/list", productsControllers.listProducts);
router.get("/:id", productsControllers.getProductById);

module.exports = router;
