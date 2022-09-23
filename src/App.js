import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "./components/css/styles.css";
import { TopNavbar } from "./components/TopNavbar";
import { ProductDetail } from "./components/ProductDetail";
import { CreateProduct } from "./components/CreateProduct";
import ProtectedRoute from "./components/PrivateRoutes.jsx";
import { Chart } from "./components/Chart";
import ProtectedLogin from "./components/ProtectedLogin";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route element={<ProtectedLogin />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/table" element={<Table />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
