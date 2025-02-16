const connectDB = require("../config/db.js");
const fs = require("fs");
const path = require("path");
const ProductTypeRepository = require("../repositories/productTypes/index.js");
const ColourRepository = require("../repositories/colours/index.js");

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
    const productTypes = await ProductTypeRepository.getProductTypes();
    const colours = await ColourRepository.getColours();

    if (productTypes.length === 0 && colours.length === 0) {
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

    await ColourRepository.insertColours(coloursArray);
    await ProductTypeRepository.insertProductTypes(productTypesArray);

    console.log("Data seeded successfully");
  } catch (error) {
    console.error(error);
  }
};

checkIfDataExists().then(() => {
  process.exit();
});
