import { Link } from "react-router-dom";
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
    <div className="">
      <div className="dropdown-container">
        <Dropdown
          title="Select colour"
          items={colours}
          selectedItem={selectedColour}
          setSelectedItem={setSelectedColour}
        />
        {/* <Dropdown
          items={productTypes}
          selectedItem={selectedProductType}
          setSelectedItem={setSelectedProductType}
        /> */}
      </div>
    </div>
  );
};

export default Filter;
