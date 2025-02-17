import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import "../styles.css";

const Filter = ({
  colours,
  selectedColour,
  setSelectedColour,
  productTypes,
  selectedProductType,
  setSelectedProductType,
}) => {
  return (
    <div className="dropdown-container">
      <div>
        <Dropdown
          title="Select colour"
          items={colours}
          selectedItem={selectedColour}
          setSelectedItem={setSelectedColour}
        />
      </div>
      <div className="dropdown-gap">
        <Dropdown
          title="Select product type"
          items={productTypes}
          selectedItem={selectedProductType}
          setSelectedItem={setSelectedProductType}
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  colours: PropTypes.array.isRequired,
  selectedColour: PropTypes.string.isRequired,
  setSelectedColour: PropTypes.func.isRequired,
  productTypes: PropTypes.array.isRequired,
  selectedProductType: PropTypes.string.isRequired,
  setSelectedProductType: PropTypes.func.isRequired,
};

export default Filter;
