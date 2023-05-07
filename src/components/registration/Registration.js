//components
import Button from "../shared/button/Button";
import General from "./general/General";
import Password from "./password/Password";

//hooks
import useValidation from "../../hooks/useValidation";

//luxon
import { DateTime } from "luxon";

//redux
import { useDispatch } from "react-redux";

//service
import { registerUser } from "../../firebase/services/auth-service";

//styles
import styles from "./Registration.module.scss";

const Registration = () => {
  const dispatch = useDispatch();
  const {
    value: birth,
    onChangeHandler: birthOnChange,
    resetHandler: birthReset,
  } = useValidation((value) => value.trim() !== "", "");
  const {
    error: confirmError,
    isValid: confirmValid,
    value: confirm,
    onBlurHandler: confirmOnBlur,
    onChangeHandler: confirmOnChange,
    resetHandler: confirmReset,
  } = useValidation((value) => value.trim() !== "", "");
  const {
    error: emailError,
    isValid: emailValid,
    value: email,
    onBlurHandler: emailOnBlur,
    onChangeHandler: emailOnChange,
    resetHandler: emailReset,
  } = useValidation((value) => value.includes("@"), "");
  const {
    error: nameError,
    isValid: nameValid,
    value: name,
    onBlurHandler: nameOnBlur,
    onChangeHandler: nameOnChange,
    resetHandler: nameReset,
  } = useValidation((value) => value.trim() !== "" && value.length >= 2, "");
  const {
    error: passwordError,
    isValid: passwordValid,
    value: password,
    onBlurHandler: passwordOnBlur,
    onChangeHandler: passwordOnChange,
    resetHandler: passwordReset,
  } = useValidation((value) => value.trim() !== "" && value.length >= 6, "");
  const {
    value: phone,
    onChangeHandler: phoneOnChange,
    resetHandler: phoneReset,
  } = useValidation((value) => value.trim() !== "", "");
  let formIsValid = false;

  if (confirmValid && emailValid && nameValid && passwordValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let general = {};
    general = {
      birth: DateTime.fromISO(birth).toFormat("MM-dd-yyyy"),
      email,
      name,
      phone,
    };

    if (!formIsValid && password === confirm) {
      return;
    }

    dispatch(registerUser(general, password));

    birthReset();
    confirmReset();
    emailReset();
    nameReset();
    passwordReset();
    phoneReset();
  };

  const confirmClassName = confirmError ? styles.error : null;
  const emailClassName = emailError ? styles.error : null;
  const nameClassName = nameError ? styles.error : null;
  const passwordClassName = passwordError ? styles.error : null;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>Registration</h1>
        <General
          birth={birth}
          birthOnChange={birthOnChange}
          email={email}
          emailClassName={emailClassName}
          emailError={emailError}
          emailOnBlur={emailOnBlur}
          emailOnChange={emailOnChange}
          name={name}
          nameClassName={nameClassName}
          nameError={nameError}
          nameOnBlur={nameOnBlur}
          nameOnChange={nameOnChange}
          phone={phone}
          phoneOnChange={phoneOnChange}
        />
        <Password
          confirm={confirm}
          confirmClassName={confirmClassName}
          confirmOnBlur={confirmOnBlur}
          confirmOnChange={confirmOnChange}
          password={password}
          passwordClassName={passwordClassName}
          passwordError={passwordError}
          passwordOnBlur={passwordOnBlur}
          passwordOnChange={passwordOnChange}
        />
        <Button background={"success"}>Submit</Button>
      </form>
    </div>
  );
};

export default Registration;
