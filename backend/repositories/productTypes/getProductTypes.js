const ProductType = require("../../models/ProductType.js");

/**
 * Retrieves all product types from the database.
 *
 * @async
 * @function getProductTypes
 * @returns {Promise<Array<{ _id: string, name: string }>>} An array of product type objects.
 */
const getProductTypes = async () => {
  return ProductType.find()
    .select({ _id: 1, name: 1 })
    .sort({
      name: 1,
    })
    .lean();
};

module.exports = {
  getProductTypes,
};
