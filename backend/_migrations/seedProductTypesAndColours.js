const connectDB = require("../config/db.js");
const fs = require("fs");
const path = require("path");
const ProductTypeRepository = require("../repositories/productTypes/index.js");
const ColourRepository = require("../repositories/colours/index.js");

// Connect to the database
connectDB();

// Read data from files
const coloursFilePath = path.resolve(__dirname, "data/colours.txt");
const productTypesFilePath = path.resolve(__dirname, "data/product-types.txt");

const colours = fs.readFileSync(coloursFilePath, "utf-8");
const productTypes = fs.readFileSync(productTypesFilePath, "utf-8");

/**
 * Checks if product types and colours data exists in the database.
 * If not, seeds the data from the provided files.
 *
 * @async
 * @function checkIfDataExists
 * @returns {Promise<void>}
 */
const checkIfDataExists = async () => {
  try {
    const productTypes = await ProductTypeRepository.getProductTypes();
    const colours = await ColourRepository.getColours();

    if (productTypes.length === 0 && colours.length === 0) {
      await seedProductTypesAndColours();
    } else {
      console.log("Data already exists");
      process.exit(0);
    }
  } catch (error) {
    console.error("Error checking data existence:", error);
    process.exit(1);
  }
};

/**
 * Seeds the product types and colours data into the database.
 * Reads data from the provided files and inserts it into the respective repositories.
 *
 * @async
 * @function seedProductTypesAndColours
 * @returns {Promise<void>}
 */
const seedProductTypesAndColours = async () => {
  try {
    const coloursArray = colours.split("\n").map((colour) => {
      const [name, hex] = colour.split("|");
      return { name, hex };
    });

    const productTypesArray = productTypes.split("\n").map((productType) => ({
      name: productType,
    }));

    await ColourRepository.insertColours(coloursArray);
    await ProductTypeRepository.insertProductTypes(productTypesArray);

    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

// Check if data exists and seed if necessary
checkIfDataExists().then(() => {
  process.exit(0);
});
