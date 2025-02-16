const ProductsRepository = require("../../repositories/products/productsRepository.js");

module.exports = async (req, res, next) => {
  try {
    const { name, colourId, productTypeId, page, limit } = req.query;
    const products = await ProductsRepository.listProducts(
      name,
      colourId,
      productTypeId,
      page,
      limit
    );
    const totalProducts = await ProductsRepository.countProducts(
      name,
      colourId,
      productTypeId
    );
    return res.json({
      products,
      pagination: {
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        total: totalProducts,
      },
    });
  } catch (error) {
    next(error);
  }
};
