const ProductType = require("../../models/ProductType.js");

module.exports = async () => {
  return ProductType.find().select({ _id: 1, name: 1 }).lean();
};
