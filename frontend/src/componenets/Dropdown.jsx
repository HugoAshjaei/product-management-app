import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import _ from "lodash";
import "../styles.css";

const Dropdown = ({ title, items, selectedItem, setSelectedItem }) => {
  const selectedItemName = _.find(items, { _id: selectedItem })?.name;
  return (
    <div className="dropdown">
      <button className="dropdown-button dropdown-right-align-arrow">
        {selectedItemName || title}
      </button>
      <div className="dropdown-content">
        {items.map((item) => (
          <Link
            key={item.name}
            to="#"
            onClick={() => setSelectedItem(item._id)}
            className="dropdown-item"
          >
            {item.name}
            {item.hex && (
              <span
                className="dropdown-colour-box"
                style={{
                  backgroundColor: item.hex,
                }}
              ></span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      hex: PropTypes.string,
    })
  ).isRequired,
  selectedItem: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    hex: PropTypes.string,
  }),
  setSelectedItem: PropTypes.func.isRequired,
};

export default Dropdown;
