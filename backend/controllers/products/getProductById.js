const ProductsRepository = require("../../repositories/products/productsRepository.js");

module.exports = async (req, res) => {
  const { id } = req.params;
  const productTypes = await ProductsRepository.getProductById(id);
  return res.json(productTypes);
};
