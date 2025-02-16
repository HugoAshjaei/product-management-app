const ProductsRepository = require("../../repositories/products/productsRepository.js");
const { errorTypes, errorMessages } = require("../../constants/errors.js");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await ProductsRepository.getProductById(id);
    if (!product) {
      return res.status(404).json({
        type: errorTypes.PRODUCT__NOT_FOUND,
        message: errorMessages[errorTypes.PRODUCT__NOT_FOUND],
      });
    }

    // delete product
    await ProductsRepository.deleteProduct(id);

    return res.json({});
  } catch (error) {
    next(error);
  }
};
