import { useState, useEffect } from "react";
import ProductCard from "../componenets/ProductCard";
import api from "../api/axiosInstance";
import _ from "lodash";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products/list");
        setProducts((prevProducts) =>
          _.uniqBy([...prevProducts, ...response.data.products], "id")
        );
        setPagination(response.data.pagination);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
