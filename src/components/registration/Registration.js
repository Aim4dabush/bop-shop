//components
import Button from "../shared/button/Button";
import Input from "../shared/input/Input";

//hooks
import useValidation from "../../hooks/useValidation";

//styles
import styles from "./Registration.module.scss";

//thunks
import { registerUser } from "../../redux/thunks/authThunk";

const Registration = () => {
  const {
    error: emailError,
    isValid: emailValid,
    value: email,
    onBlurHandler: emailOnBlur,
    onChangeHandler: emailOnChange,
    resetHandler: emailReset,
  } = useValidation((value) => value.includes("@"));
  const {
    error: nameError,
    isValid: nameValid,
    value: name,
    onBlurHandler: nameOnBlur,
    onChangeHandler: nameOnChange,
    resetHandler: nameReset,
  } = useValidation((value) => value.trim() !== "" && value.length >= 2);
  const {
    error: passwordError,
    isValid: passwordValid,
    value: password,
    onBlurHandler: passwordOnBlur,
    onChangeHandler: passwordOnChange,
    resetHandler: passwordReset,
  } = useValidation((value) => value.trim() !== "" && value.length >= 6);
  const {
    error: confirmError,
    isValid: confirmValid,
    value: confirm,
    onBlurHandler: confirmOnBlur,
    onChangeHandler: confirmOnChange,
    resetHandler: confirmReset,
  } = useValidation((value) => value.trim() !== "");
  let formIsValid = false;

  if (confirmValid && emailValid && nameValid && passwordValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid && password === confirm) {
      return;
    }

    registerUser(email, name, password);

    confirmReset();
    emailReset();
    nameReset();
    passwordReset();
  };

  const confirmClassName = confirmError ? styles.error : null;
  const emailClassName = emailError ? styles.error : null;
  const nameClassName = nameError ? styles.error : null;
  const passwordClassName = passwordError ? styles.error : null;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>Registration</h1>
        <div className={styles.userWrapper}>
          <Input
            classStyle={nameClassName}
            error={nameError}
            id={"name"}
            message={"Please enter a name that is at least two letters long"}
            onBlurHandler={nameOnBlur}
            onChangeHandler={nameOnChange}
            type={"text"}
            value={name}
          >
            Name
          </Input>
          <Input
            classStyle={emailClassName}
            error={emailError}
            id={"email"}
            message={"Please enter a valid email"}
            onBlurHandler={emailOnBlur}
            onChangeHandler={emailOnChange}
            type={"email"}
            value={email}
          >
            Email
          </Input>
        </div>
        <div className={styles.userWrapper}>
          <Input
            classStyle={passwordClassName}
            error={passwordError}
            id={"password"}
            message={"Please enter a password at least 6 characters long"}
            onBlurHandler={passwordOnBlur}
            onChangeHandler={passwordOnChange}
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
        <Button background={"success"}>Submit</Button>
      </form>
    </div>
  );
};

export default Registration;
