import styles from "./product.module.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className={styles["product"]}>
      <img
        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        alt="product photo"
      />

      <div className={styles["product__info"]}>
        <p className={styles["info__name"]}></p>
        <p className={styles["info__description"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          adipisci optio quasi est ab aliquam ipsum, qui esse eum distinctio.
        </p>
        <p className={styles["info__price"]}>$499.99</p>

        <Link to={`/product/${1111}`} className={styles["info__button"]}>
          View
        </Link>
      </div>
    </div>
  );
}

export default Product;
