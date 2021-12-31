import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className={styles["navbar__logo"]}>
        <h2>MERN Shopping Cart</h2>
      </div>
      <ul className={styles["navbar__links"]}>
        <li>
          <Link to="/Cart">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
