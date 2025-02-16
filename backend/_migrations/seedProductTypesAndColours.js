const connectDB = require("../config/db.js");
const ProductType = require("../models/ProductType.js");
const Colour = require("../models/Colour.js");
const fs = require("fs");
const path = require("path");

// connect to database
connectDB();

// read data
const colours = fs.readFileSync(
  path.join(__dirname, "data/colours.txt"),
  "utf-8"
);

const productTypes = fs.readFileSync(
  path.join(__dirname, "data/product-types.txt"),
  "utf-8"
);

const checkIfDataExists = async () => {
  try {
    const productTypesCount = await ProductType.countDocuments();
    const coloursCount = await Colour.countDocuments();

    if (productTypesCount === 0 && coloursCount === 0) {
      await seedProductTypesAndColours();
    } else {
      console.log("Data already exists");
      process.exit();
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// seed data
const seedProductTypesAndColours = async () => {
  try {
    const coloursArray = colours.split("\n").map((colour) => {
      const [name, hex] = colour.split("|");
      return {
        name,
        hex,
      };
    });

    // seed product types
    const productTypesArray = productTypes.split("\n").map((productType) => ({
      name: productType,
    }));

    await Colour.insertMany(coloursArray);
    await ProductType.insertMany(productTypesArray);

    console.log("Data seeded successfully");
  } catch (error) {
    console.error(error);
  }
};

checkIfDataExists().then(() => {
  process.exit();
});
