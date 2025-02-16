const ProductsRepository = require("../../repositories/products/productsRepository.js");
const { errorTypes, errorMessages } = require("../../constants/errors.js");

module.exports = async (req, res, next) => {
  try {
    const { id, name, description, price, colours, productType, images } =
      req.body;

    // check if product already exists
    const product = await ProductsRepository.getProductById(id);
    if (product) {
      return res.status(400).json({
        type: errorTypes.PRODUCT__ALREADY_EXISTS,
        message: errorMessages[errorTypes.PRODUCT__ALREADY_EXISTS],
      });
    }

    // insert product
    await ProductsRepository.insertProduct({
      id,
      name,
      description,
      price,
      colours,
      productType,
      images,
    });

    const newProduct = await ProductsRepository.getProductById(id);

    return res.status(201).json({
      product: newProduct,
    });
  } catch (error) {
    next(error);
  }
};
