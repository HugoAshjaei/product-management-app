const router = require("express").Router();
const productsControllers = require("../../controllers/products/productsControllers.js");

router.post("/add", productsControllers.addProduct);
router.get("/list", productsControllers.listProducts);
router.get("/get/:id", productsControllers.getProductById);
router.put("/update/:id", productsControllers.updateProduct);
router.delete("/delete/:id", productsControllers.deleteProduct);

module.exports = router;
