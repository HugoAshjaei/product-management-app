const Product = require("../../models/Product.js");

/**
 * Inserts a new product into the database.
 *
 * @async
 * @function insertProduct
 * @param {Object} product - The product object to be inserted.
 * @param {string} product.id - The ID of the product.
 * @param {string} product.name - The name of the product.
 * @param {string} product.description - The description of the product.
 * @param {number} product.price - The price of the product.
 * @param {Array<string>} product.colours - The colours of the product.
 * @param {string} product.productType - The type of the product.
 * @param {Array<string>} [product.images=[]] - The images of the product.
 * @returns {Promise<Object>} The inserted product object.
 */
const insertProduct = async ({
  id,
  name,
  description,
  price,
  colours,
  productType,
  images = [],
}) => {
  return Product.create({
    id,
    name,
    description,
    price,
    colours,
    productType,
    images,
  });
};

module.exports = {
  insertProduct,
};
