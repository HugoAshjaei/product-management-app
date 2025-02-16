import { useState, useEffect } from "react";
import ProductCard from "../componenets/ProductCard";
import api from "../api/axiosInstance";
import _ from "lodash";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchProducts = async (pageNumber) => {
    try {
      const response = await api.get(
        `/products/list?page=${pageNumber || 1}&limit=10`
      );
      setProducts((prevProducts) =>
        _.uniqBy([...prevProducts, ...response.data.products], "id")
      );
      setTotalProducts(response.data.pagination.total);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreProducts = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  useEffect(() => {
    fetchProducts(pageNumber);
  }, [pageNumber]);

  return (
    <div>
      <h1>Products list</h1>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!loading && products.length < totalProducts && (
        <button onClick={loadMoreProducts} className="load-more">
          Load more
        </button>
      )}
    </div>
  );
};

export default Home;
