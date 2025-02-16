const mongoose = require("mongoose");

const ProductTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("ProductType", ProductTypeSchema);
