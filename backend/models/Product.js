const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        _id: false,
        url: {
          type: String,
          required: true,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    colour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Colour",
    },
    productType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductType",
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ name: 1 });
ProductSchema.index({ colour: 1 });
ProductSchema.index({ productType: 1 });
ProductSchema.index({ createdAt: 1 });

module.exports = mongoose.model("Product", ProductSchema);
