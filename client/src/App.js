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
        <Navbar />
        <Backdrop show={sideToggle} />
        <SideDrawer show={sideToggle} />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
