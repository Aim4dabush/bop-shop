import { useState } from "react";

const useValidation = (validation) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validation(value);
  const error = !isValid && touched;

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = () => {
    setTouched(true);
  };

  const resetHandler = () => {
    setValue("");
    setTouched(false);
  };

  return {
    error,
    isValid,
    value,
    onBlurHandler,
    onChangeHandler,
    resetHandler,
  };
};

export default useValidation;
