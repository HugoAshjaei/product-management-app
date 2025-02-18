import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
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
      <ProductForm
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
        handleSubmit={handleSubmit}
        isEdit={false}
      />
    </div>
  );
};

export default AddProduct;
