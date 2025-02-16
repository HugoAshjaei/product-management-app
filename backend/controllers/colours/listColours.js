const ColoursRepository = require("../../repositories/colours/coloursRepository.js");

module.exports = async (req, res, next) => {
  try {
    const colours = await ColoursRepository.getColours();
    return res.json({
      colours,
    });
  } catch (error) {
    next(error);
  }
};
