const Colour = require("../../models/Colour.js");

/**
 * Retrieves all colours from the database.
 *
 * @async
 * @function getColours
 * @returns {Promise<Array<{ _id: string, name: string, hex: string }>>} An array of colour objects.
 */
const getColours = async () => {
  return Colour.find()
    .select({ _id: 1, name: 1, hex: 1 })
    .sort({
      name: 1,
    })
    .lean();
};

module.exports = {
  getColours,
};
