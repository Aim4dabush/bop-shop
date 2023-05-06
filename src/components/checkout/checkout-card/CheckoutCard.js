import { useState } from "react";

//components
import BillingAddress from "./billing-address/BillingAddress";
import Button from "../../shared/button/Button";
import CustomerInfo from "./customer-info/CustomerInfo";
import InputCheckBox from "../../shared/input-checkbox/InputCheckBox";
import PaymentInfo from "./payment-info/PaymentInfo";
import Shipping from "./shipping/Shipping";
import ShippingAddress from "./shipping-address/ShippingAddress";

//hooks
import useValidation from "../../../hooks/useValidation";

//redux
import { useDispatch } from "react-redux";

//styles
import styles from "./CheckoutCard.module.scss";

const CheckoutCard = () => {
  const dispatch = useDispatch();
  const [equals, setEquals] = useState(true);
  const [twoDay, setTwoDay] = useState(false);
  console.log(twoDay);
  const {
    error: billingCityError,
    isValid: billingCityValid,
    value: billingCity,
    onBlurHandler: billingCityOnBlur,
    onChangeHandler: billingCityOnChange,
    resetHandler: billingCityReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: billingStateError,
    isValid: billingStateValid,
    value: billingState,
    onBlurHandler: billingStateOnBlur,
    onChangeHandler: billingStateOnChange,
    resetHandler: billingStateReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: billingStreetError,
    isValid: billingStreetValid,
    value: billingStreet,
    onBlurHandler: billingStreetOnBlur,
    onChangeHandler: billingStreetOnChange,
    resetHandler: billingStreetReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: billingZipError,
    isValid: billingZipValid,
    value: billingZip,
    onBlurHandler: billingZipOnBlur,
    onChangeHandler: billingZipOnChange,
    resetHandler: billingZipReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: birthError,
    isValid: birthValid,
    value: birth,
    onBlurHandler: birthOnBlur,
    onChangeHandler: birthOnChange,
    resetHandler: birthReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: cardError,
    isValid: cardValid,
    value: card,
    onBlurHandler: cardOnBlur,
    onChangeHandler: cardOnChange,
    resetHandler: cardReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: companyError,
    isValid: companyValid,
    value: company,
    onBlurHandler: companyOnBlur,
    onChangeHandler: companyOnChange,
    resetHandler: companyReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: emailError,
    isValid: emailValid,
    value: email,
    onBlurHandler: emailOnBlur,
    onChangeHandler: emailOnChange,
    resetHandler: emailReset,
  } = useValidation((value) => value.includes("@"));
  const {
    error: expirationError,
    isValid: expirationValid,
    value: expiration,
    onBlurHandler: expirationOnBlur,
    onChangeHandler: expirationOnChange,
    resetHandler: expirationReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: nameError,
    isValid: nameValid,
    value: name,
    onBlurHandler: nameOnBlur,
    onChangeHandler: nameOnChange,
    resetHandler: nameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: phoneError,
    isValid: phoneValid,
    value: phone,
    onBlurHandler: phoneOnBlur,
    onChangeHandler: phoneOnChange,
    resetHandler: phoneReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: shippingCityError,
    isValid: shippingCityValid,
    value: shippingCity,
    onBlurHandler: shippingCityOnBlur,
    onChangeHandler: shippingCityOnChange,
    resetHandler: shippingCityReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: shippingStateError,
    isValid: shippingStateValid,
    value: shippingState,
    onBlurHandler: shippingStateOnBlur,
    onChangeHandler: shippingStateOnChange,
    resetHandler: shippingStateReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: shipppingStreetError,
    isValid: shippingStreetError,
    value: shippingStreet,
    onBlurHandler: shippingStreetOnBlur,
    onChangeHandler: shippingStreetOnChange,
    resetHandler: shippingStreetReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: shippingZipError,
    isValid: shippingZipValid,
    value: shippingZip,
    onBlurHandler: shippingZipOnBlur,
    onChangeHandler: shippingZipOnChange,
    resetHandler: shippingZipReset,
  } = useValidation((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const equalsHandler = (e) => {
    setEquals(e.target.checked);
  };

  const billingCityClassName = billingCityError && styles.error;
  const billingStateClassName = billingStateError && styles.error;
  const billingStreetClassName = billingStreetError && styles.error;
  const billingZipClassName = billingZipError && styles.error;
  const birthClassName = birthError && styles.error;
  const cardClassName = cardError && styles.error;
  const companyClassName = companyError && styles.error;
  const emailClassName = emailError && styles.error;
  const expirationClassName = expirationError && styles.error;
  const nameClassName = nameError && styles.error;
  const phoneClassName = phoneError && styles.error;
  const shippingCityClassName = shippingCityError && styles.error;
  const shippingStateClassName = shippingStateError && styles.error;
  const shippingStreetClassName = shippingStreetError && styles.error;
  const shippingZipClassName = shippingZipError && styles.error;

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <h1 className={styles.form_title}>Order Form</h1>
      <CustomerInfo
        birth={{
          class: birthClassName,
          error: birthError,
          blur: birthOnBlur,
          change: birthOnChange,
          value: birth,
        }}
        email={{
          class: emailClassName,
          error: emailError,
          blur: emailOnBlur,
          change: emailOnChange,
          value: email,
        }}
        name={{
          class: nameClassName,
          error: nameError,
          blur: nameOnBlur,
          change: nameOnChange,
          value: name,
        }}
        phone={{
          class: phoneClassName,
          error: phoneError,
          blur: phoneOnBlur,
          change: phoneOnChange,
          value: phone,
        }}
      />
      <BillingAddress
        city={{
          class: billingCityClassName,
          error: billingCityError,
          blur: billingCityOnBlur,
          change: billingCityOnChange,
          value: billingCity,
        }}
        state={{
          class: billingStateClassName,
          error: billingStateError,
          blur: billingStateOnBlur,
          change: billingStateOnChange,
          value: billingState,
        }}
        street={{
          class: billingStreetClassName,
          error: billingStreetError,
          blur: billingStreetOnBlur,
          change: billingStreetOnChange,
          value: billingStreet,
        }}
        zip={{
          class: billingZipClassName,
          error: billingZipError,
          blur: billingZipOnBlur,
          change: billingZipOnChange,
          value: billingZip,
        }}
      />
      <ShippingAddress
        city={{
          class: shippingCityClassName,
          error: shippingCityError,
          blur: shippingCityOnBlur,
          change: shippingCityOnChange,
          value: shippingCity,
        }}
        state={{
          class: shippingStateClassName,
          error: shippingStateError,
          blur: shippingStateOnBlur,
          change: shippingStateOnChange,
          value: shippingState,
        }}
        street={{
          class: shippingStreetClassName,
          error: shippingStreetError,
          blur: shippingStreetOnBlur,
          change: shippingStreetOnChange,
          value: shippingStreet,
        }}
        zip={{
          class: shippingZipClassName,
          error: shippingZipError,
          blur: shippingZipOnBlur,
          change: shippingZipOnChange,
          value: shippingZip,
        }}
      />
      <InputCheckBox id={"equals"} check={equals} checkHandler={equalsHandler}>
        Same as billing
      </InputCheckBox>
      <PaymentInfo
        card={{
          class: cardClassName,
          error: cardError,
          blur: cardOnBlur,
          change: cardOnChange,
          value: card,
        }}
        company={{
          class: companyClassName,
          error: companyError,
          blur: companyOnBlur,
          change: companyOnChange,
          value: company,
        }}
        expiration={{
          class: expirationClassName,
          error: expirationError,
          blur: expirationOnBlur,
          change: expirationOnChange,
          value: expiration,
        }}
      />
      <Shipping twoDay={twoDay} setTwoDay={setTwoDay} />
      <div className={styles.btn_wrapper}>
        <Button background={"success"}>Submit</Button>
      </div>
    </form>
  );
};

export default CheckoutCard;
