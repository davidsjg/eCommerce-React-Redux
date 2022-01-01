import CartItem from "../../components/cartItem/cartItem";
import styles from "./CartScreen.module.css";

function CartScreen() {
  return (
    <div className={styles["cartscreen"]}>
      <div className={styles["cartscreen__left"]}>
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={styles["cartscreen__right"]}>
        <div className={styles["cartscreen__info"]}>
          <p>Subtotal (0) items</p>
          <p>Price: $499.99</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
