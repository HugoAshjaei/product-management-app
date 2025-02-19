// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCard from "../components/ProductCard";
import PropTypes from "prop-types";

const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other product properties here if needed
    })
  ).isRequired,
};

export default ProductsList;
