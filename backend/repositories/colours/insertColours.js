const Colour = require("../../models/Colour.js");

/**
 * Inserts multiple colours into the database.
 *
 * @async
 * @function insertColours
 * @param {Array<{ name: string, hex: string }>} colours - An array of colour objects to be inserted.
 * @returns {Promise<Array<{ _id: string, name: string, hex: string }>>} An array of inserted colour objects.
 */
const insertColours = async (colours = []) => {
  return Colour.insertMany(colours);
};

module.exports = {
  insertColours,
};
