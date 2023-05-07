//components
import Input from "../../shared/input/Input";

//styles
import styles from "./General.module.scss";

const General = ({
  birth,
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
  phoneOnChange,
}) => {
  return (
    <div className={styles.general_wrapper}>
      <h3>General</h3>
      <div className={styles.row}>
        <Input
          classStyle={nameClassName}
          error={nameError}
          id={"name"}
          message={"Please enter a name that is at least two letters long"}
          stretch={true}
          type={"text"}
          value={name}
          onBlurHandler={nameOnBlur}
          onChangeHandler={nameOnChange}
        >
          Name
        </Input>
        <Input
          classStyle={emailClassName}
          error={emailError}
          id={"email"}
          message={"Please enter a valid email"}
          type={"email"}
          stretch={true}
          value={email}
          onBlurHandler={emailOnBlur}
          onChangeHandler={emailOnChange}
        >
          Email
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          id={"phone"}
          stretch={true}
          type={"number"}
          value={phone}
          onChangeHandler={phoneOnChange}
        >
          Phone
        </Input>
        <Input
          id={"birth"}
          stretch={true}
          type={"date"}
          value={birth}
          onChangeHandler={birthOnChange}
        >
          Birthday
        </Input>
      </div>
    </div>
  );
};

export default General;
