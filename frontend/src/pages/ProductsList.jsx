import { useState, useEffect, useCallback } from "react";
import ProductCard from "../componenets/ProductCard";
import Filter from "../componenets/Filter";
import api from "../api/axiosInstance";
import _ from "lodash";
import "../styles/components/load-more.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [colours, setColours] = useState([]);
  const [selectedColour, setSelectedColour] = useState("");
  const [productTypes, setProductTypes] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchProducts = useCallback(
    async (pageNumber) => {
      try {
        const endpoint = `/products/list?page=${pageNumber || 1}&limit=10${
          selectedColour ? `&colourId=${selectedColour}` : ""
        }${selectedProductType ? `&productTypeId=${selectedProductType}` : ""}`;
        const response = await api.get(endpoint);
        setProducts((prevProducts) =>
          _.uniqBy([...prevProducts, ...response.data.products], "id")
        );
        setTotalProducts(response.data.pagination.total);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [selectedColour, selectedProductType]
  );

  const fetchColours = async () => {
    try {
      const response = await api.get("/colours/list");
      setColours(response.data.colours);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductTypes = async () => {
    try {
      const response = await api.get("/productTypes/list");
      setProductTypes(response.data.productTypes);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMoreProducts = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  useEffect(() => {
    fetchColours();
    fetchProductTypes();
  }, []);

  useEffect(() => {
    fetchProducts(pageNumber);
  }, [pageNumber, selectedColour, selectedProductType, fetchProducts]);

  useEffect(() => {
    setProducts([]);
    setPageNumber(1);
  }, [selectedColour, selectedProductType]);

  return (
    <div>
      <h1>Products list</h1>
      <Filter
        colours={colours}
        selectedColour={selectedColour}
        setSelectedColour={setSelectedColour}
        productTypes={productTypes}
        selectedProductType={selectedProductType}
        setSelectedProductType={setSelectedProductType}
      />
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
      {loading && (
        <button disabled className="load-more load-more-disabled">
          Loading...
        </button>
      )}
      {!loading && products.length === totalProducts && (
        <button className="load-more load-more-disabled">
          No more products to load
        </button>
      )}
    </div>
  );
};

export default Home;
