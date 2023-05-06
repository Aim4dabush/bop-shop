//components
import Input from "../../../shared/input/Input";
import Select from "../../../shared/select/Select";

//data
import { companyOptions } from "../../../../utils/options-data";

//styles
import styles from "./PaymentInfo.module.scss";

const PaymentInfo = ({
  card,
  cardClassName,
  cardError,
  cardOnBlur,
  cardOnChange,
  company,
  companyClassName,
  companyError,
  companyOnBlur,
  companyOnChange,
  expiration,
  expirationClassName,
  expirationError,
  expirationOnBlur,
  expirationOnChange,
}) => {
  return (
    <div className={styles.payment_section}>
      <h3>Payment Info</h3>
      <div className={styles.row}>
        <Input
          classStyle={cardClassName}
          error={cardError}
          id={"card"}
          message={"Please enter an address"}
          onBlurHandler={cardOnBlur}
          onChangeHandler={cardOnChange}
          stretch={true}
          type={"text"}
          value={card}
        >
          Credit Card
        </Input>
      </div>
      <div className={styles.last_row}>
        <Select
          classStyle={companyClassName}
          error={companyError}
          id={"company"}
          message={"Please select a card company"}
          onBlurHandler={companyOnBlur}
          onChangeHandler={companyOnChange}
          selectOptions={companyOptions}
          type={"select"}
          value={company}
        >
          Company
        </Select>
        <Input
          classStyle={expirationClassName}
          error={expirationError}
          id={"expiration"}
          message={"Please select a date"}
          onBlurHandler={expirationOnBlur}
          onChangeHandler={expirationOnChange}
          stretch={true}
          type={"date"}
          value={expiration}
        >
          Expiration
        </Input>
      </div>
    </div>
  );
};

export default PaymentInfo;
