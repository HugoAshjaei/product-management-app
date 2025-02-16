const mongoose = require("mongoose");

const ColourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hex: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Colour", ColourSchema);
