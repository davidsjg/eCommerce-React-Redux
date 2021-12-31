import styles from "./ProductScreen.module.css";

function ProductScreen() {
  return (
    <div className={styles["productscreen"]}>
      <div className={styles["productscreen__left"]}>
        <div className={styles["left__image"]}>
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            alt="product image"
          />
        </div>

        <div className={styles["left__info"]}>
          <p className={styles["left__name"]}>Product 1</p>
          <p>Price: $499.99</p>
          <p>
            Descriptiong: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nihil perferendis ducimus dolores cumque delectus porro iusto
            quod quo quae laborum!
          </p>
        </div>
      </div>

      <div className={styles["productscreen__right"]}>
        <div className={styles["right__info"]}>
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status <span>in stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
