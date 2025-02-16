const {
  generateQuery,
} = require("../../../repositories/products/listProducts.js");

describe("testing generateQuery function on listProducts", () => {
  test("return an empty object when there is no params", () => {
    const result = generateQuery();
    expect(result).toEqual({});
  });

  test("query must have colour parameter when colourId is provided", () => {
    const result = generateQuery(null, "colourId", null);
    expect(result).toEqual({ colours: "colourId" });
  });

  test("query must have productType parameter when productTypeId is provided", () => {
    const result = generateQuery(null, null, "productTypeId");
    expect(result).toEqual({ productType: "productTypeId" });
  });

  test("query must have name parameter as a regex when name is provided", () => {
    const result = generateQuery("name", null, null);
    expect(result).toEqual({ name: { $regex: new RegExp("name", "i") } });
  });

  test("query must have all parameters when all are provided", () => {
    const result = generateQuery("name", "colourId", "productTypeId");
    expect(result).toEqual({
      name: { $regex: new RegExp("name", "i") },
      colours: "colourId",
      productType: "productTypeId",
    });
  });
});
