const Product = require("../../models/Product.js");

/**
 * Retrieves a product from the database by its ID.
 *
 * @async
 * @function getProductById
 * @param {string} id - The ID of the product to retrieve.
 * @returns {Promise<Product>} The product object.
 */
const getProductById = async (id) => {
  return Product.findOne({ id }).select({ __v: 0 }).lean();
};

module.exports = { getProductById };
