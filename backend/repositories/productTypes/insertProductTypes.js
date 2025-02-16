const ProductType = require("../../models/ProductType.js");

/**
 * Inserts multiple product types into the database.
 *
 * @async
 * @function insertProductTypes
 * @param {Array<{ name: string }>} productTypes - An array of product type objects to be inserted.
 * @returns {Promise<Array<{ _id: string, name: string }>>} An array of inserted product type objects.
 */
const insertProductTypes = async (productTypes = []) => {
  return ProductType.insertMany(productTypes);
};

module.exports = {
  insertProductTypes,
};
