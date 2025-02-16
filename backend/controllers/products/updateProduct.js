const ProductsRepository = require("../../repositories/products/productsRepository.js");
const { errorTypes, errorMessages } = require("../../constants/errors.js");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, colours, productType, images } = req.body;

    const product = await ProductsRepository.getProductById(id);
    if (!product) {
      return res.status(404).json({
        type: errorTypes.PRODUCT__NOT_FOUND,
        message: errorMessages[errorTypes.PRODUCT__NOT_FOUND],
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
    const products = await ProductsRepository.listProducts();

    return res.json({
      products,
    });
  } catch (error) {
    next(error);
  }
};
