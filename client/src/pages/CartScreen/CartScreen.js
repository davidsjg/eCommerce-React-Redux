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
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
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
              key={product.products}
              item={product}
              qtyChangeHandler={qtyChangeHandler}
              removeItemCart={removeItemCart}
            />
          ))
        )}
      </div>
      <div className={styles["cartscreen__right"]}>
        <div className={styles["cartscreen__info"]}>
          <p>Subtotal ({getCartCount()}) items</p>
          <p>Price: $({getCartSubtotal().toFixed(2)})</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
