const mongoose = require("mongoose");

const ProductTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 64,
    minlength: 1,
  },
});

module.exports = mongoose.model("ProductType", ProductTypeSchema);
