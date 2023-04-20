//styles
import styles from "./Input.module.scss";

const Input = ({
  children,
  classStyle,
  error,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  type,
  value,
}) => {
  return (
    <div className={styles.inputControl}>
      <label htmlFor={id}>{children}</label>
      <input
        className={`${styles.input} ${classStyle}`}
        id={id}
        type={type}
        value={value}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
      {error && <p className={styles.errorMessage}>{message}</p>}
    </div>
  );
};

export default Input;
