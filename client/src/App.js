import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import ProductScreen from "./pages/ProductScreen/ProductScreen";
import CartScreen from "./pages/CartScreen/CartScreen";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/:product" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Routes>
    </Router>
  );
}

export default App;
