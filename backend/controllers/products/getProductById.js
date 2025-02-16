const ProductsRepository = require("../../repositories/products/productsRepository.js");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ProductsRepository.getProductById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.json({
      product,
    });
  } catch (error) {
    next(error);
  }
};
