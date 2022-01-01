import styles from "./HomeScreen.module.css";
import Product from "../../components/product/product";
import CartScreen from "../CartScreen/CartScreen";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "../../utils/API";

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    API.getProducts().then((data) => {
      console.log(data);
    });
  }, []);

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

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
