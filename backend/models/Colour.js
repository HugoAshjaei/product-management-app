const mongoose = require("mongoose");

const ColourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 64,
    minlength: 1,
  },
  hex: {
    type: String,
    required: true,
    match: /^#[0-9a-fA-F]{6}$/, // This regex pattern is for a 6-digit hexadecimal colour code
  },
});

module.exports = mongoose.model("Colour", ColourSchema);
