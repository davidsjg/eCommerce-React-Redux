import styles from "./backdrop.module.css";

function Backdrop({ show }) {
  return show && <div className={styles["backdrop"]}></div>;
}

export default Backdrop;
