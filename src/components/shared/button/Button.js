//styles
import styles from "./Button.module.scss";

const Button = ({ buttonHandler, children, colorPrimary }) => {
  return (
    <button
      className={`${colorPrimary ? styles.primary : styles.secondary}`}
      onClick={buttonHandler}
    >
      {children}
    </button>
  );
};

export default Button;
