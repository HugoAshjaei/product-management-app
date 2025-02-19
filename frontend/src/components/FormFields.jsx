// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const FormFields = ({
  id,
  setId,
  name,
  setName,
  price,
  setPrice,
  description,
  setDescription,
  colours,
  setColours,
  productType,
  setProductType,
  images,
  setImages,
  coloursList,
  productTypesList,
  isEdit,
}) => {
  const selectedColours = coloursList
    .filter((colour) => colours.includes(colour._id))
    .map((colour) => ({
      value: colour._id,
      label: colour.name,
    }));

  const selectedProductType_ = productTypesList.find(
    (productType_) => productType_._id === productType
  );
  const selectedProductType = selectedProductType_
    ? {
        value: selectedProductType_._id,
        label: selectedProductType_.name,
      }
    : null;

  return (
    <>
      <FormInput
        label="ID"
        type="text"
        id="id"
        value={id}
        onChange={(e) => isEdit || setId(e.target.value)}
        readOnly={isEdit}
        required
      />
      <FormInput
        label="Name"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormInput
        label="Price"
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <FormInput
        label="Description"
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormSelect
        label="Colours"
        value={selectedColours}
        options={coloursList.map((colour) => ({
          value: colour._id,
          label: colour.name,
        }))}
        onChange={(selectedColours) =>
          setColours(selectedColours.map((colour) => colour.value))
        }
        isMulti
      />
      <FormSelect
        label="Product Type"
        value={selectedProductType}
        options={productTypesList.map((productType) => ({
          value: productType._id,
          label: productType.name,
        }))}
        onChange={(selectedProductType) =>
          setProductType(selectedProductType.value)
        }
      />
      <FormInput
        label="Image url"
        type="text"
        id="images"
        value={images[0]}
        onChange={(e) => setImages([e.target.value])}
      />
    </>
  );
};

FormFields.propTypes = {
  id: PropTypes.string.isRequired,
  setId: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  setPrice: PropTypes.func.isRequired,
  description: PropTypes.string,
  setDescription: PropTypes.func.isRequired,
  colours: PropTypes.array.isRequired,
  setColours: PropTypes.func.isRequired,
  productType: PropTypes.string.isRequired,
  setProductType: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  setImages: PropTypes.func.isRequired,
  coloursList: PropTypes.array.isRequired,
  productTypesList: PropTypes.array.isRequired,
  isEdit: PropTypes.bool.isRequired,
};

export default FormFields;
