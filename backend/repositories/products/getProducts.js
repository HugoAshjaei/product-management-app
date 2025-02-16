const Product = require("../../models/Product.js");

/**
 * Generates a query object for retrieving products based on the provided filters.
 *
 * @function generateQuery
 * @param {string} [name] - The name of the product to search for.
 * @param {string} [colourId] - The ID of the colour to filter by.
 * @param {string} [productTypeId] - The ID of the product type to filter by.
 * @returns {Object} The query object.
 */
const generateQuery = (name, colourId, productTypeId) => {
  const query = {};

  if (name) {
    query.name = { $regex: new RegExp(name, "i") };
  }

  if (colourId) {
    query.colourId = colourId;
  }

  if (productTypeId) {
    query.productTypeId = productTypeId;
  }

  return query;
};

/**
 * Retrieves products from the database based on the provided filters and pagination options.
 *
 * @async
 * @function getProducts
 * @param {string} [name] - The name of the product to search for.
 * @param {string} [colourId] - The ID of the colour to filter by.
 * @param {string} [productTypeId] - The ID of the product type to filter by.
 * @param {number} [pageNumber=1] - The page number for pagination.
 * @param {number} [pageSize=10] - The number of products per page.
 * @returns {Promise<Array<Product>>} An array of product objects.
 */
module.exports = async (
  name,
  colourId,
  productTypeId,
  pageNumber = 1,
  pageSize = 10
) => {
  const query = generateQuery(name, colourId, productTypeId);
  return Product.find(query)
    .select({ __v: 0 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .lean();
};
