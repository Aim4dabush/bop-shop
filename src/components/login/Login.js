//components
import Button from "../shared/button/Button";
import Input from "../shared/input/Input";
import Link from "../shared/link/Link";

//hooks
import useValidation from "../../hooks/useValidation";

//redux
import { useDispatch } from "react-redux";

//styles
import styles from "./Login.module.scss";

//thunks
import { login } from "../../redux/thunks/authThunk";

const Login = () => {
  const dispatch = useDispatch();
  const {
    error: emailError,
    isValid: emailValid,
    value: email,
    onBlurHandler: emailOnBlur,
    onChangeHandler: emailOnChange,
    resetHandler: emailReset,
  } = useValidation((value) => value.includes("@"));
  const {
    error: passwordError,
    isValid: passwordValid,
    value: password,
    onBlurHandler: passwordOnBlur,
    onChangeHandler: passwordOnChange,
    resetHandler: passwordReset,
  } = useValidation((value) => (value.trim() !== "") & (value.length >= 6));
  let formIsValid = false;

  if (emailValid && passwordValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    dispatch(login(email, password));

    emailReset();
    passwordReset();
  };

  const emailClassName = emailError ? styles.error : null;
  const passwordClassName = passwordError ? styles.error : null;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>Login</h1>
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
        <Input
          classStyle={passwordClassName}
          error={passwordError}
          id={"password"}
          message={"Please enter a valid password"}
          onBlurHandler={passwordOnBlur}
          onChangeHandler={passwordOnChange}
          type={"password"}
          value={password}
        >
          Password
        </Input>
        <Button colorPrimary={true}>Login</Button>
      </form>
      <p className={styles.registrationLink}>
        Don't have an account?{" "}
        <Link colorPrimary={false} path={"/registration"}>
          Click here
        </Link>
      </p>
    </div>
  );
};

export default Login;
