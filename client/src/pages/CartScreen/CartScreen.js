import CartItem from "../../components/cartItem/cartItem";
import styles from "./CartScreen.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

function CartScreen() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeItemCart = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  return (
    <div className={styles["cartscreen"]}>
      <div className={styles["cartscreen__left"]}>
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your cart is empty. <Link to="/">Go shop!</Link>
          </div>
        ) : (
          cartItems.map((product) => (
            <CartItem
              key={product.id}
              item={product}
              qtyChangeHandler={qtyChangeHandler}
              removeItemCart={removeItemCart}
            />
          ))
        )}
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
