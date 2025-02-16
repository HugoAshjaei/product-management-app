const ProductTypesRepository = require("../../repositories/productTypes/productTypesRepository.js");

module.exports = async (req, res) => {
  const productTypes = await ProductTypesRepository.getProductTypes();
  return res.json(productTypes);
};
