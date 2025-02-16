const { listProducts, countProducts } = require("./listProducts.js");
const { getProductById } = require("./getProductById.js");
const { insertProduct } = require("./insertProduct.js");
const { updateProduct } = require("./updateProduct.js");
const { deleteProduct } = require("./deleteProduct.js");

module.exports = {
  listProducts,
  countProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
