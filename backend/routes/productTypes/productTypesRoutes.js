const router = require("express").Router();
const productTypesControllers = require("../../controllers/productTypes/productTypesControllers.js");

router.get("/list", productTypesControllers.listProductTypes);

module.exports = router;
