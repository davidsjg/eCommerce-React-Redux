import styles from "./ProductScreen.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

function ProductScreen() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { id } = useParams();

  console.log(id);

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    console.log(id);
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch]);

  return (
    <div className={styles["productscreen"]}>
      {loading ? (
        <h2>loading....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className={styles["productscreen__left"]}>
            <div className={styles["left__image"]}>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className={styles["left__info"]}>
              <p className={styles["left__name"]}>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className={styles["productscreen__right"]}>
            <div className={styles["right__info"]}>
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status{" "}
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button">Add to Cart</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
