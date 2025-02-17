import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import AddProduct from "./pages/AddProduct";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
