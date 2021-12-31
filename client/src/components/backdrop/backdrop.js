import styles from "./backdrop.module.css";

function Backdrop({ show, click }) {
  return show && <div className={styles["backdrop"]} onClick={click}></div>;
}

export default Backdrop;
