import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles.css"; // Ensure this contains our styles

const ProductCard = ({ product }) => {
  const price = product.price.toString();
  const priceInteger = price.split(".")[0];
  const priceDecimal = price.split(".")[1];
  const priceDecimalFormatted = priceDecimal ? priceDecimal : ":-";
  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.name}
        className="product-image"
      />

      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>

      <div className="product-price-container">
        <p className="product-price-integer">{`${priceInteger}`}</p>
        <span className="product-price-decimal">{`${priceDecimalFormatted}`}</span>
      </div>

      <Link to={`/edit/${product.id}`} className="edit-link">
        Edit
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ProductCard;
