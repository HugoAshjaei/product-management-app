import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import api from "../api/axiosInstance";
import "../styles/components/buttons.css";

const EditProduct = () => {
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
  const { id: productId } = useParams();

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

  const fetchProductDetails = async () => {
    try {
      const response = await api.get(`/products/get/${productId}`);
      const product = response.data.product;
      setId(product.id);
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setColours(product.colours);
      setProductType(product.productType);
      setImages(product.images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchColours();
    fetchProductTypes();
    fetchProductDetails();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/products/update/${productId}`, {
        name,
        price,
        description,
        colours,
        productType,
        images: images.filter((image) => image !== ""),
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/products/delete/${productId}`);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
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
        handleDelete={handleDelete}
        isEdit={true}
      />
    </div>
  );
};

export default EditProduct;
