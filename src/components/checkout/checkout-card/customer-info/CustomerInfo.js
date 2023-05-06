//components
import Input from "../../../shared/input/Input";

//styles
import styles from "./CustomerInfo.module.scss";

const CustomerInfo = ({
  birth,
  birthClassName,
  birthError,
  birthOnBlur,
  birthOnChange,
  email,
  emailClassName,
  emailError,
  emailOnBlur,
  emailOnChange,
  name,
  nameClassName,
  nameError,
  nameOnBlur,
  nameOnChange,
  phone,
  phoneClassName,
  phoneError,
  phoneOnBlur,
  phoneOnChange,
}) => {
  return (
    <div className={styles.info_section}>
      <h3>Customer Info</h3>
      <div className={`${styles.row}`}>
        <Input
          classStyle={nameClassName}
          error={nameError}
          id={"name"}
          message={"Please enter a name"}
          onBlurHandler={nameOnBlur}
          onChangeHandler={nameOnChange}
          stretch={true}
          type={"test"}
          value={name}
        >
          Name
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          classStyle={emailClassName}
          error={emailError}
          id={"email"}
          message={"Please enter a value email"}
          onBlurHandler={emailOnBlur}
          onChangeHandler={emailOnChange}
          stretch={true}
          type={"email"}
          value={email}
        >
          Email
        </Input>
        <Input
          classStyle={phoneClassName}
          error={phoneError}
          id={"phone"}
          message={"Please enter a valid phone number"}
          onBlurHandler={phoneOnBlur}
          onChangeHandler={phoneOnChange}
          padding={true}
          stretch={true}
          type={"number"}
          value={phone}
        >
          Phone
        </Input>
        <Input
          classStyle={birthClassName}
          error={birthError}
          id={"birth"}
          message={"Please select a date"}
          onBlurHandler={birthOnBlur}
          onChangeHandler={birthOnChange}
          stretch={true}
          type={"date"}
          value={birth}
        >
          Birthday
        </Input>
      </div>
    </div>
  );
};

export default CustomerInfo;
