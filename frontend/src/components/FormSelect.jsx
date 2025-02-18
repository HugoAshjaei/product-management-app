import PropTypes from "prop-types";
import Select from "react-select";

const FormSelect = ({ label, value, options, onChange, isMulti }) => (
  <>
    <label htmlFor={label}>{label}:</label>
    <br />
    <Select
      value={value}
      options={options}
      onChange={onChange}
      isMulti={isMulti}
    />
    <br />
  </>
);

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
};

FormSelect.defaultProps = {
  value: null,
  isMulti: false,
};

export default FormSelect;
