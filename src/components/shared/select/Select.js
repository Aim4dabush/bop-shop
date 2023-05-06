//styles
import styles from "./Select.module.scss";

const Select = ({
  children,
  classStyle,
  disable,
  error,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  selectOptions,
  padding,
  value,
}) => {
  return (
    <div className={`${styles.select_control} ${padding && styles.padding}`}>
      <label htmlFor={id}>{children}</label>
      <select
        className={`${classStyle} ${styles.select}`}
        disabled={disable}
        id={id}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={value}
      >
        {selectOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {error && <p className={styles.error_message}>{message}</p>}
    </div>
  );
};

export default Select;
