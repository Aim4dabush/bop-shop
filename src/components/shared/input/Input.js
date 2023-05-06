//styles
import styles from "./Input.module.scss";

const Input = ({
  checked,
  children,
  classStyle,
  disable,
  error,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  padding,
  stretch,
  type,
  value,
}) => {
  return (
    <div
      className={`${styles.inputControl} ${stretch && styles.stretch} ${
        type === "checkbox" && styles.checkbox
      } ${padding && styles.padding}`}
    >
      <label htmlFor={id}>{children}</label>
      <input
        checked={checked}
        className={`${styles.input} ${classStyle}`}
        disabled={disable}
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
