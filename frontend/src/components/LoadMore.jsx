import PropTypes from "prop-types";
import "../styles/components/load-more.css";
const LoadMore = ({
  loading,
  productsLength,
  totalProducts,
  loadMoreProducts,
}) => {
  if (loading) {
    return (
      <button disabled className="load-more load-more-disabled">
        Loading...
      </button>
    );
  }

  if (productsLength < totalProducts) {
    return (
      <button onClick={loadMoreProducts} className="load-more">
        Load more
      </button>
    );
  }

  return (
    <button className="load-more load-more-disabled">
      No more products to load
    </button>
  );
};
LoadMore.propTypes = {
  loading: PropTypes.bool.isRequired,
  productsLength: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  loadMoreProducts: PropTypes.func.isRequired,
};

export default LoadMore;
