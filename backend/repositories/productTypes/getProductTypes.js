const ProductType = require("../../models/ProductType.js");

/**
 * Retrieves all product types from the database.
 *
 * @async
 * @function getProductTypes
 * @returns {Promise<Array<{ _id: string, name: string }>>} An array of product type objects.
 */
module.exports = async () => {
  return ProductType.find().select({ _id: 1, name: 1 }).lean();
};
