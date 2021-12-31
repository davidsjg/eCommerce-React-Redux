import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import ProductScreen from "./pages/ProductScreen/ProductScreen";
import CartScreen from "./pages/CartScreen/CartScreen";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/navbar";
import Backdrop from "./components/backdrop/backdrop";
import SideDrawer from "./components/sideDrawer/sideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <>
        <Navbar click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
