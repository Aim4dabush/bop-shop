import Select from "react-select";

//styles
import styles from "./InputSelect.module.scss";

const InputSelect = ({
  children,
  classStyle,
  disable,
  error,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  selectOptions,
  spaceLeft,
  value,
}) => {
  return (
    <div
      className={`${styles.select_control} ${spaceLeft && styles.space_left}`}
    >
      <label htmlFor={id}>{children}</label>
      <Select
        classNamePrefix={styles.picker}
        className={`${classStyle} ${styles.select}`}
        id={id}
        value={value}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        options={selectOptions}
        isDisabled={disable}
      />
      {error && <p className={styles.error_message}>{message}</p>}
    </div>
  );
};

export default InputSelect;
