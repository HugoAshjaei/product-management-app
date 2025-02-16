const {
  getColours,
  insertColours,
} = require("../../../repositories/colours/coloursRepository.js");

describe("coloursRepository", () => {
  // insertColour first

  test("insertColours should insert a colour", async () => {
    const colour = { name: "testColour", hex: "#000000" };
    const result = await insertColours(colour);
    expect(result[0].name).toBe(colour.name);
    expect(result[0].hex).toBe(colour.hex);
  });

  test("getColours should return an array of colours", async () => {
    const result = await getColours();

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });

  test("getColours should return an array of colours with the correct keys", async () => {
    const result = await getColours();

    expect(result[0]).toHaveProperty("_id");
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("hex");
  });

  test("getColours should return an array of colours with the correct values", async () => {
    const result = await getColours();

    expect(result[0].name).toBe("testColour");
    expect(result[0].hex).toBe("#000000");
  });
});
