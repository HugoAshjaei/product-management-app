// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import FormFields from "./FormFields";
import "../styles/components/buttons.css";
import "../styles/components/product-form.css";
import { useEffect, useState } from "react";

const useFormValidation = (id, name, price, colours, productType) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isFormValid =
      id.trim() !== "" &&
      name.trim() !== "" &&
      name.length <= 64 &&
      name.length >= 1 &&
      !isNaN(price) &&
      price > 0 &&
      colours.length > 0 &&
      productType.trim() !== "";

    setIsValid(isFormValid);
  }, [id, name, price, colours, productType]);

  return isValid;
};

const ProductForm = ({
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
  handleSubmit,
  handleDelete,
  isEdit,
}) => {
  const isValid = useFormValidation(id, name, price, colours, productType);

  return (
    <div className="product-form-container">
      <form onSubmit={handleSubmit}>
        <FormFields
          id={id}
          setId={setId}
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          description={description}
          setDescription={setDescription}
          colours={colours}
          setColours={setColours}
          productType={productType}
          setProductType={setProductType}
          images={images}
          setImages={setImages}
          coloursList={coloursList}
          productTypesList={productTypesList}
          isEdit={isEdit}
        />
        <button type="submit" className="btn-primary" disabled={!isValid}>
          {isEdit ? "Update Product" : "Add Product"}
        </button>
        {isEdit && (
          <button
            type="button"
            className="btn-danger btn-margin"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this product?")
              ) {
                handleDelete();
              }
            }}
          >
            Delete Product
          </button>
        )}
      </form>
    </div>
  );
};

ProductForm.propTypes = {
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
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  isEdit: PropTypes.bool.isRequired,
};

export default ProductForm;
