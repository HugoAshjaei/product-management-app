const Product = require("../../models/Product.js");

/**
 * Retrieves a product from the database by its ID.
 *
 * @async
 * @function getProductById
 * @param {string} id - The ID of the product to retrieve.
 * @returns {Promise<Product>} The product object.
 */
module.exports = async (id) => {
  return Product.findOne({ id })
    .select({ __v: 0 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .lean();
};
