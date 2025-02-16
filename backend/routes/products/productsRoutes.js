const router = require("express").Router();
const productsControllers = require("../../controllers/products/productsControllers.js");
const validator = require("../../middlewares/validator.js");
const productValidatorSchemas = require("../../validators/products/index.js");

router.post(
  "/add",
  validator(productValidatorSchemas.addProductValidator),
  productsControllers.addProduct
);
router.get(
  "/list",
  validator(productValidatorSchemas.productListingsValidator),
  productsControllers.listProducts
);
router.get(
  "/get/:id",
  validator(productValidatorSchemas.getProductValidator),
  productsControllers.getProductById
);
router.put(
  "/update/:id",
  validator(productValidatorSchemas.updateProductValidator),
  productsControllers.updateProduct
);
router.delete(
  "/delete/:id",
  validator(productValidatorSchemas.deleteProductValidator),
  productsControllers.deleteProduct
);

module.exports = router;
