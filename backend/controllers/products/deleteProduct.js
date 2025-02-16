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

    // delete product
    await ProductsRepository.deleteProduct(id);
    // return products list
    const products = await ProductsRepository.getProducts();

    return res.json({
      products,
    });
  } catch (error) {
    next(error);
  }
};
