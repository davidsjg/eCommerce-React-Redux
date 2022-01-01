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
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={styles["homescreen"]}>
      <h2 className={styles["homescreen__title"]}></h2>

      <div className={styles["homescreen__products"]}>
        {loading ? (
          <h2>loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => {
            return (
              <Product
                key={product._id}
                productId={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
