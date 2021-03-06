import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ click }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar__logo"]}>
        <Link to="/">
          <h2>MERN eCommerce Store</h2>
        </Link>
      </div>
      <ul className={styles["navbar__links"]}>
        <li>
          <Link to="/cart" className={styles["cart__link"]}>
            <i className="fas fa-shopping-cart" />
            <span className={styles["cart__span"]}>Cart</span>
            <span className={styles["cartlogo__badge"]}>{getCartCount()}</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className={styles["hamburger__menu"]} onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
