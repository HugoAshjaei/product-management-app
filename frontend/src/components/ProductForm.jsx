import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "../styles/components/buttons.css";
import "../styles/components/product-form.css";

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
  isEdit,
}) => {
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
    <div className="product-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <br />
        <input
          className="product-form-input"
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => isEdit || setId(e.target.value)}
          required
          readOnly={isEdit}
        />
        <br />

        <label htmlFor="name">Name:</label>
        <br />
        <input
          className="product-form-input"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label htmlFor="price">Price:</label>
        <br />
        <input
          className="product-form-input"
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <input
          className="product-form-input"
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label htmlFor="colour">Colours:</label>
        <br />
        <Select
          value={selectedColours}
          isMulti
          options={coloursList.map((colour) => ({
            value: colour._id,
            label: colour.name,
          }))}
          onChange={(selectedColours) =>
            setColours(selectedColours.map((colour) => colour.value))
          }
        />
        <br />

        <label htmlFor="productType">Product Type:</label>
        <br />
        <Select
          value={selectedProductType}
          options={productTypesList.map((productType) => ({
            value: productType._id,
            label: productType.name,
          }))}
          onChange={(selectedProductType) =>
            setProductType(selectedProductType.value)
          }
        />
        <br />

        <label htmlFor="images">Image url:</label>
        <br />
        <input
          className="product-form-input"
          type="text"
          id="images"
          name="images"
          value={images[0]}
          onChange={(e) => setImages([e.target.value])}
        />
        <br />

        <button type="submit" className="btn-primary" disabled={!isValid}>
          {isEdit ? "Update Product" : "Add Product"}
        </button>
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
  isEdit: PropTypes.bool.isRequired,
};

export default ProductForm;
