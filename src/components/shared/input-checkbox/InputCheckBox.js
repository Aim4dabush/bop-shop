import { useState } from "react";

//styles
import styles from "./InputCheckBox.module.scss";

const InputCheckBox = ({ children, id, check, setCheck }) => {
  const checkHandler = (e) => {
    setCheck((prev) => (prev = e.target.checked));
  };
  return (
    <div className={styles.checkbox_control}>
      <label htmlFor={id}>{children}</label>
      <input id={id} type="checkbox" checked={check} onChange={checkHandler} />
    </div>
  );
};

export default InputCheckBox;
