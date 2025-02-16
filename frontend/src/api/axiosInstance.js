import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:4000/api/", // Base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
