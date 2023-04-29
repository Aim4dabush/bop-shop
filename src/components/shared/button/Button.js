//styles
import styles from "./Button.module.scss";

const Button = ({ buttonHandler, children, background }) => {
  return (
    <button
      className={`${styles.btn} ${
        (background === "primary" && styles.primary) ||
        (background === "secondary" && styles.secondary) ||
        (background === "success" && styles.success) ||
        (background === "warning" && styles.warning) ||
        (background === "danger" && styles.danger)
      }`}
      onClick={buttonHandler}
    >
      {children}
    </button>
  );
};

export default Button;
