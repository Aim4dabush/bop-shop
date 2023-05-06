import { useState } from "react";

//components
import InputCheckBox from "../../../shared/input-checkbox/InputCheckBox";

//styles
import styles from "./Shipping.module.scss";

const Shipping = ({
  value,
  value2,
  value3,
  setValue,
  setValue2,
  setValue3,
}) => {
  return (
    <div className={styles.shipping}>
      <h3>Shipping</h3>
      <div className={styles.checkbox_wrapper}>
        <InputCheckBox id={"two_day"} check={value} setCheck={setValue}>
          2 Day Shipping
        </InputCheckBox>
        <InputCheckBox id={"five_day"} check={value2} setCheck={setValue2}>
          5 Day Shipping
        </InputCheckBox>
        <InputCheckBox id={"free"} check={value3} setCheck={setValue3}>
          Free Shipping
        </InputCheckBox>
      </div>
    </div>
  );
};

export default Shipping;
