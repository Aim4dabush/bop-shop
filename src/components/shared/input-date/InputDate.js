import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//styles
import styles from "./InputDate.module.scss";

const InputDate = ({
  children,
  classStyle,
  error,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  value,
}) => {
  return (
    <div className={styles.date_control}>
      <label htmlFor={id}>{children}</label>
      <DatePicker
        className={`${classStyle} ${styles.picker}`}
        id={id}
        selected={value}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholderText="Pick date..."
      />
      {error && <p className={styles.error_message}>{message}</p>}
    </div>
  );
};

export default InputDate;
