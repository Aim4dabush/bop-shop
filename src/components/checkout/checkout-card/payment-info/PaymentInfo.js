//components
import Input from "../../../shared/input/Input";
import InputDate from "../../../shared/input-date/InputDate";
import InputSelect from "../../../shared/input-select/InputSelect";

//data
import { companyOptions } from "../../../../utils/options-data";

//styles
import styles from "./PaymentInfo.module.scss";

const PaymentInfo = ({ card, company, expiration }) => {
  return (
    <div className={styles.payment_section}>
      <h3>Payment Info</h3>
      <div className={styles.row}>
        <Input
          classStyle={card.cardClassName}
          error={card.cardError}
          id={"card"}
          message={"Please enter an address"}
          onBlurHandler={card.cardOnBlur}
          onChangeHandler={card.cardOnChange}
          stretch={true}
          type={"text"}
          value={card.card}
        >
          Credit Card
        </Input>
      </div>
      <div className={styles.last_row}>
        <InputSelect
          classStyle={company.companyClassName}
          error={company.companyError}
          id={"company"}
          message={"Please select a card company"}
          onBlurHandler={company.companyOnBlur}
          onChangeHandler={company.companyOnChange}
          selectOptions={companyOptions}
          value={company.company}
        >
          Company
        </InputSelect>
        <InputDate
          classStyle={expiration.expirationClassName}
          error={expiration.expirationError}
          id={"expiration"}
          message={"Please select a date"}
          onBlurHandler={expiration.expirationOnBlur}
          onChangeHandler={expiration.expirationOnChange}
          value={expiration.expiration}
        >
          Expiration
        </InputDate>
      </div>
    </div>
  );
};

export default PaymentInfo;
