//components
import Input from "../../shared/input/Input";

//styles
import styles from "./Password.module.scss";

const Password = ({
  confirm,
  confirmClassName,
  confirmOnBlur,
  confirmOnChange,
  password,
  passwordClassName,
  passwordError,
  passwordOnBlur,
  passwordOnChange,
}) => {
  return (
    <div className={styles.password_wrapper}>
      <div className={styles.row}>
        <Input
          classStyle={passwordClassName}
          error={passwordError}
          id={"password"}
          message={"Please enter a password at least 6 characters long"}
          onBlurHandler={passwordOnBlur}
          onChangeHandler={passwordOnChange}
          stretch={true}
          type={"password"}
          value={password}
        >
          Password
        </Input>
        <div className={styles.inputControl}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className={`${styles.input} ${confirmClassName}`}
            type="password"
            value={confirm}
            id="confirmPassword"
            onBlur={confirmOnBlur}
            onChange={confirmOnChange}
          />
          {password !== confirm && (
            <p className={styles.errorMessage}>
              This field doesn't match the password you entered.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Password;
