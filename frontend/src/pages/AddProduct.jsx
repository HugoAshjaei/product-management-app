import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import api from "../api/axiosInstance";
import "../styles/components/buttons.css";

const AddProduct = () => {
  const [coloursList, setColoursList] = useState([]);
  const [productTypesList, setProductTypesList] = useState([]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [colours, setColours] = useState([]);
  const [productType, setProductType] = useState("");
  const [images, setImages] = useState([""]);
  const navigate = useNavigate();

  const fetchColours = async () => {
    try {
      const response = await api.get("/colours/list");
      setColoursList(response.data.colours);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductTypes = async () => {
    try {
      const response = await api.get("/productTypes/list");
      setProductTypesList(response.data.productTypes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchColours();
    fetchProductTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products/add", {
        id,
        name,
        price,
        description,
        colours,
        productType,
        images,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <br />
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <br />

        <label htmlFor="name">Name:</label>
        <br />
        <input
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
          type="text"
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
          type="text"
          id="images"
          name="images"
          value={images[0]}
          onChange={(e) => setImages([e.target.value])}
        />
        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
