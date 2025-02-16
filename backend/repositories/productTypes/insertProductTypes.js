const ProductType = require("../../models/ProductType.js");

module.exports = async (productTypes = []) => {
  return ProductType.insertMany(productTypes);
};
