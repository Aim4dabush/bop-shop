//styles
import styles from "./Input.module.scss";

const Input = ({
  children,
  classStyle,
  disable,
  error,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  stretch,
  type,
  value,
}) => {
  return (
    <div className={`${styles.inputControl} ${stretch && styles.stretch}`}>
      <label htmlFor={id}>{children}</label>
      <input
        className={`${styles.input} ${classStyle}`}
        id={id}
        type={type}
        value={value}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        disabled={disable}
      />
      {error && <p className={styles.errorMessage}>{message}</p>}
    </div>
  );
};

export default Input;
