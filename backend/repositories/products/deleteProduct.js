const Product = require("../../models/Product.js");

/**
 * Deletes a product from the database.
 *
 * @async
 * @function deleteProduct
 * @param {string} id - The ID of the product to update.
 * @returns {Promise<Object>} The deleted product object.
 */
const deleteProduct = async (id) => {
  return Product.deleteOne({
    id: id,
  });
};

module.exports = {
  deleteProduct,
};
