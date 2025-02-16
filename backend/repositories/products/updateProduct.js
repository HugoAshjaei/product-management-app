const Product = require("../../models/Product.js");

/**
 * Updates a product in the database.
 *
 * @async
 * @function updateProduct
 * @param {string} id - The ID of the product to update.
 * @param {Object} product - The product object to be inserted.
 * @param {string} product.name - The name of the product.
 * @param {string} product.description - The description of the product.
 * @param {number} product.price - The price of the product.
 * @param {Array<string>} product.colours - The colours of the product.
 * @param {string} product.productType - The type of the product.
 * @param {Array<string>} [product.images=[]] - The images of the product.
 * @returns {Promise<Object>} The updated product object.
 */
module.exports = async (
  id,
  { name, description, price, colours, productType, images = [] }
) => {
  return Product.updateOne(
    { id },
    {
      $set: {
        name,
        description,
        price,
        colours,
        productType,
        images,
      },
    }
  );
};
