const ProductsRepository = require("../../../repositories/products/productsRepository.js");
const ObjectId = require("mongodb").ObjectId;

describe("ProductsRepository", () => {
  const colourId = new ObjectId();
  const productTypeId = new ObjectId();
  test("insertProduct should insert a product", async () => {
    const product = {
      id: "1",
      name: "testProduct",
      description: "testDescription",
      price: 100,
      colours: [colourId],
      productType: productTypeId,
      images: [],
    };
    const result = await ProductsRepository.insertProduct(product);
    expect(result.name).toBe(product.name);
    expect(result.description).toBe(product.description);
    expect(result.price).toBe(product.price);
    expect(result.colours).toEqual([colourId]);
    expect(result.productType).toBe(productTypeId);
    expect(result.images).toEqual([]);
  });

  test("listProducts should return an array of products", async () => {
    const result = await ProductsRepository.listProducts();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });

  test("listProducts should return an array of products with the correct keys", async () => {
    const result = await ProductsRepository.listProducts();
    expect(result[0]).toHaveProperty("_id");
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("description");
    expect(result[0]).toHaveProperty("price");
    expect(result[0]).toHaveProperty("colours");
    expect(result[0]).toHaveProperty("productType");
    expect(result[0]).toHaveProperty("images");
  });

  test("listProducts should return an array of products with the correct values", async () => {
    const result = await ProductsRepository.listProducts();
    expect(result[0].name).toBe("testProduct");
    expect(result[0].description).toBe("testDescription");
    expect(result[0].price).toBe(100);
    expect(result[0].colours).toEqual([colourId]);
    expect(result[0].productType).toEqual(productTypeId);
    expect(result[0].images).toEqual([]);
  });

  test("getProduct should return the correct product", async () => {
    const result = await ProductsRepository.getProductById("1");
    expect(result.id).toBe("1");
  });

  test("countProducts should return the correct count", async () => {
    const result = await ProductsRepository.countProducts();
    expect(result).toBe(1);
  });

  test("updateProduct should update the product", async () => {
    const product = {
      name: "updatedProduct",
      description: "updatedDescription",
      price: 200,
      colours: [colourId],
      productType: productTypeId,
      images: [],
    };
    await ProductsRepository.updateProduct("1", product);
    const result = await ProductsRepository.getProductById("1");
    expect(result.name).toBe(product.name);
    expect(result.description).toBe(product.description);
    expect(result.price).toBe(product.price);
    expect(result.colours).toEqual([colourId]);
    expect(result.productType).toEqual(productTypeId);
    expect(result.images).toEqual([]);
  });

  test("deleteProduct should delete the product", async () => {
    await ProductsRepository.deleteProduct("1");
    const result = await ProductsRepository.getProductById("1");
    expect(result).toBeNull();
  });
});
