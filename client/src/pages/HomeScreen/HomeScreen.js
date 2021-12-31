import styles from "./HomeScreen.module.css";
import Product from "../../components/product/product";
import CartScreen from "../CartScreen/CartScreen";

function HomeScreen() {
  return (
    <div className={styles["homescreen"]}>
      <h2 className={styles["homescreen__title"]}></h2>

      <div className={styles["homescreen__products"]}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default HomeScreen;
