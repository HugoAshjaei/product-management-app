const ProductsRepository = require("../../repositories/products/productsRepository.js");

module.exports = async (req, res, next) => {
  try {
    const { name, colourId, productTypeId, page, limit } = req.query;
    const products = await ProductsRepository.getProducts(
      name,
      colourId,
      productTypeId,
      page,
      limit
    );
    return res.json({
      products,
    });
  } catch (error) {
    next(error);
  }
};
