const ProductsRepository = require("../../repositories/products/productsRepository.js");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, colours, productType, images } = req.body;

    const product = await ProductsRepository.getProductById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // update product
    await ProductsRepository.updateProduct(id, {
      name,
      description,
      price,
      colours,
      productType,
      images,
    });

    // return products list
    const products = await ProductsRepository.getProducts();

    return res.json({
      products,
    });
  } catch (error) {
    next(error);
  }
};
