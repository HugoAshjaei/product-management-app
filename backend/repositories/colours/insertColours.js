const Colour = require("../../models/Colour.js");

module.exports = async (colours = []) => {
  return Colour.insertMany(colours);
};
