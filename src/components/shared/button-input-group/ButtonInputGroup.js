import styles from "./ButtonInputGroup.module.scss";

const ButtonInputGroup = ({ value }) => {
  return (
    <div className={styles.btnInputGroup}>
      <button className={`${styles.btn} ${styles.left}`}>-</button>
      <input className={styles.input} type="number" value={value} />
      <button className={`${styles.btn} ${styles.right}`}>+</button>
    </div>
  );
};

export default ButtonInputGroup;
