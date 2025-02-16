const ColoursRepository = require("../../repositories/colours/coloursRepository.js");

module.exports = async (req, res) => {
  const colours = await ColoursRepository.getColours();
  return res.json({
    colours,
  });
};
