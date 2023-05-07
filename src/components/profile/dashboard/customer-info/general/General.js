//components
import Input from "../../../../shared/input/Input";

//styles
import styles from "./General.module.scss";

const General = ({
  birth,
  birthOnChange,
  edit,
  email,
  emailOnChange,
  name,
  nameOnChange,
  phone,
  phoneOnChange,
}) => {
  return (
    <div className={styles.general_wrapper}>
      <h3>General</h3>
      <div className={styles.row}>
        <Input
          disable={!edit}
          id={"name"}
          stretch={true}
          type={"text"}
          value={name}
          onChangeHandler={nameOnChange}
        >
          Name
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          disable={!edit}
          id={"email"}
          stretch={true}
          type={"email"}
          value={email}
          onChangeHandler={emailOnChange}
        >
          Email
        </Input>
        <Input
          disable={!edit}
          id={"phone"}
          stretch={true}
          type={"number"}
          value={phone}
          onChangeHandler={phoneOnChange}
        >
          Phone
        </Input>
        <Input
          disable={!edit}
          id={"birthday"}
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
