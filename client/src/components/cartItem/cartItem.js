import styles from "./cartItem.module.css";
import { Link } from "react-router-dom";

function CartItem({ item, qtyChangeHandler }) {
  console.log(item);
  return (
    <div className={styles["cartitem"]}>
      <div className={styles["cartitem__image"]}>
        <Link
          to={`/product/${item.products}`}
          className={styles["cartitem__name"]}
        >
          <img src={item.imageUrl} alt={item.name} />
        </Link>
      </div>
      <Link
        to={`/product/${item.products}`}
        className={styles["cartitem__name"]}
      >
        <p>{item.name}</p>
      </Link>
      <p className={styles["cartitem__price"]}>${item.price}</p>
      <select
        className={styles["cartitem__select"]}
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.products, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
        ,
      </select>

      <button className={styles["cartitem__deleteBtn"]}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default CartItem;
