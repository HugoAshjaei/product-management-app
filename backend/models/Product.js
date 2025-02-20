const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 1,
    },
    description: {
      type: String,
      default: "",
    },
    images: [
      {
        _id: false,
        type: String,
      },
    ],
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    colours: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Colour",
      },
    ],
    productType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductType",
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ id: 1 });
ProductSchema.index({ name: 1 });
ProductSchema.index({ colour: 1 });
ProductSchema.index({ productType: 1 });
ProductSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Product", ProductSchema);
