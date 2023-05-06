//components
import InputCheckBox from "../../../shared/input-checkbox/InputCheckBox";

//styles
import styles from "./Shipping.module.scss";

const Shipping = ({ twoDay, setTwoDay }) => {
  const twoDayHandler = (e) => {
    setTwoDay((prev) => (prev = e.target.checked));
  };
  return (
    <div className={styles.shipping}>
      <h3>Shipping</h3>
      <div className={styles.checkbox_wrapper}>
        <InputCheckBox
          id={"two_day"}
          check={twoDay}
          checkHandler={twoDayHandler}
        >
          2 Day Shipping
        </InputCheckBox>
        <InputCheckBox id={"five_day"}>5 Day Shipping</InputCheckBox>
        <InputCheckBox id={"free"}>Free Shipping</InputCheckBox>
      </div>
    </div>
  );
};

export default Shipping;
