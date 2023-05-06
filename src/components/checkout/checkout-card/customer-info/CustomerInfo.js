//components
import Input from "../../../shared/input/Input";
import InputDate from "../../../shared/input-date/InputDate";

//styles
import styles from "./CustomerInfo.module.scss";

const CustomerInfo = ({ birth, email, name, phone }) => {
  return (
    <div className={styles.info_section}>
      <h3>Customer Info</h3>
      <div className={`${styles.row}`}>
        <Input
          classStyle={name.nameClassName}
          error={name.nameClassError}
          id={"name"}
          message={"Please enter a name"}
          onBlurHandler={name.nameOnBlur}
          onChangeHandler={name.nameOnChange}
          stretch={true}
          type={"test"}
          value={name.name}
        >
          Name
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          classStyle={email.emailClassName}
          error={email.emailError}
          id={"email"}
          message={"Please enter a value email"}
          onBlurHandler={email.emailOnBlur}
          onChangeHandler={email.emailOnChange}
          type={"email"}
          value={email.email}
        >
          Email
        </Input>
        <Input
          classStyle={phone.phoneClassName}
          error={phone.phoneError}
          id={"phone"}
          message={"Please enter a valid phone number"}
          onBlurHandler={phone.phoneOnBlur}
          onChangeHandler={phone.phoneOnChange}
          type={"number"}
          value={phone.phone}
        >
          Phone
        </Input>
        <InputDate
          classStyle={birth.birthClassName}
          error={birth.birthError}
          id={"birth"}
          message={"Please select a date"}
          onBlurHandler={birth.birthOnBlur}
          onChangeHandler={birth.birthOnChange}
          value={birth.birth}
        >
          Birthday
        </InputDate>
      </div>
    </div>
  );
};

export default CustomerInfo;
