import styles from "./cartItem.module.css";
import { Link } from "react-router-dom";

function CartItem() {
  return (
    <div className={styles["cartitem"]}>
      <div className={styles["cartitem__image"]}>
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt="product image"
        />
      </div>
      <Link to={`/product/${111}`} className={styles["cartitem__name"]}>
        <p>Product 1</p>
      </Link>
      <p className={styles["cartitem__price"]}>$499.99</p>
      <select className={styles["cartitem__select"]}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className={styles["cartitem__deleteBtn"]}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default CartItem;
