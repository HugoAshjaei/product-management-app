const Colour = require("../../models/Colour.js");

module.exports = async () => {
  return Colour.find().select({ _id: 1, name: 1, hex: 1 }).lean();
};
