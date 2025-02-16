const {
  getProductTypes,
  insertProductTypes,
} = require("../../../repositories/productTypes/productTypesRepository.js");

describe("productTypesRepository", () => {
  test("insertProductTypes should insert a productType", async () => {
    const productType = { name: "produtTypeName" };
    const result = await insertProductTypes(productType);
    expect(result[0].name).toBe(productType.name);
  });

  test("getProductTypes should return an array of productTypes", async () => {
    const result = await getProductTypes();

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });

  test("getProductTypes should return an array of productTypes with the correct keys", async () => {
    const result = await getProductTypes();

    expect(result[0]).toHaveProperty("_id");
    expect(result[0]).toHaveProperty("name");
  });

  test("getProductTypes should return an array of productTypes with the correct values", async () => {
    const result = await getProductTypes();

    expect(result[0].name).toBe("produtTypeName");
  });
});
