import { useState } from "react";
import ProductCard from "../componenets/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([
    {
      _id: "67b1e01489b3364a66a79e5b",
      id: "1",
      name: "Product Name 1",
      description: "Product Description",
      images: [
        "https://www.ikea.com/se/en/images/products/soederhamn-3-seat-section-tonerud-red__1213838_pe911343_s5.jpg?f=xl",
      ],
      price: 100,
      colours: ["67b1ba2e5ac50e121fdd8baa"],
      productType: "67b1ba2e5ac50e121fdd8bdf",
      createdAt: "2025-02-16T12:54:44.384Z",
      updatedAt: "2025-02-16T13:53:23.127Z",
    },
    {
      _id: "67b1e01489b3364a66a79e5b",
      id: "2",
      name: "Product Name 2",
      description:
        "Product Description jsjd jans djkasnd kaj owqj djasd adh ajsd",
      images: [
        "https://www.ikea.com/se/en/images/products/soederhamn-3-seat-section-tonerud-red__1213838_pe911343_s5.jpg?f=xl",
      ],
      price: 100,
      colours: ["67b1ba2e5ac50e121fdd8baa"],
      productType: "67b1ba2e5ac50e121fdd8bdf",
      createdAt: "2025-02-16T12:54:44.384Z",
      updatedAt: "2025-02-16T13:53:23.127Z",
    },
  ]);

  return (
    <div>
      <h1>Products list</h1>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
