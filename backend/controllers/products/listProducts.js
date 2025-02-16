const ProductsRepository = require("../../repositories/products/productsRepository.js");

module.exports = async (req, res) => {
  const { name, colourId, productTypeId, page, limit } = req.query;
  const productTypes = await ProductsRepository.getProducts({
    name,
    colourId,
    productTypeId,
    page,
    limit,
  });
  return res.json(productTypes);
};
