import { Home } from "./components/Home";
import { NavbarAdmin } from "./components/NavbarAdmin";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "./components/css/styles.css";

function App() {
  return (
    <div className="App">
      <NavbarAdmin />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
