import { Home } from "./components/Home";
import { NavbarAdmin } from "./components/NavbarAdmin";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "./components/css/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TopNavbar } from "./components/TopNavbar";
import { SideNavbar } from "./components/SideNavbar";
import { ProductDetail } from "./components/ProductDetail";
import { CreateProduct } from "./components/CreateProduct";

function App() {
  return (
    <div className="App ">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
