//styles
import styles from "./Button.module.scss";

const Button = ({ background, buttonHandler, children, tip, type }) => {
  return (
    <button
      className={`${styles.btn} ${
        (background === "primary" && styles.primary) ||
        (background === "secondary" && styles.secondary) ||
        (background === "success" && styles.success) ||
        (background === "warning" && styles.warning) ||
        (background === "danger" && styles.danger)
      }`}
      type={type}
      onClick={buttonHandler}
    >
      <span className={styles.toolTip}>{tip}</span>
      {children}
    </button>
  );
};

export default Button;
