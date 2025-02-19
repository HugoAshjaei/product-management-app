// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const FormInput = ({
  label,
  type,
  id,
  value,
  onChange,
  readOnly,
  required,
}) => (
  <>
    <label htmlFor={id}>{label}:</label>
    <br />
    <input
      className="product-form-input"
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      required={required}
    />
    <br />
  </>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  readOnly: false,
  required: false,
};

export default FormInput;
