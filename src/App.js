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
import ProtectedRoute from "./components/PrivateRoutes.jsx";
import { Chart } from "./components/Chart";
import ProtectedLogin from "./components/ProtectedLogin";

function App() {
  return (
    <div className="App ">
      <TopNavbar />
      <Routes>
        <Route element={<ProtectedLogin />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
