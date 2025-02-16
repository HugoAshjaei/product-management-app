const ProductTypesRepository = require("../../repositories/productTypes/productTypesRepository.js");

module.exports = async (req, res, next) => {
  try {
    const productTypes = await ProductTypesRepository.getProductTypes();
    return res.json({
      productTypes,
    });
  } catch (error) {
    next(error);
  }
};
