import { useState } from "react";

//components
import BillingAddress from "./billing-address/BillingAddress";
import Button from "../../shared/button/Button";
import CustomerInfo from "./customer-info/CustomerInfo";
import Input from "../../shared/input/Input";
import PaymentInfo from "./payment-info/PaymentInfo";
import Shipping from "./shipping/Shipping";
import ShippingAddress from "./shipping-address/ShippingAddress";

//hooks
import useValidation from "../../../hooks/useValidation";

//luxon
import { DateTime } from "luxon";

//redux
import { useDispatch, useSelector } from "react-redux";

//string generator
import randomstring from "randomstring";

//styles
import styles from "./CheckoutCard.module.scss";

const CheckoutCard = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cart.shopCart);
  const [equals, setEquals] = useState(true);
  const [shipping, setShipping] = useState();
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
  } = useValidation((value) => value.trim() !== "" && value.length === 5);
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
  } = useValidation((value) => value.trim() !== "" && value.length === 16);
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
  } = useValidation((value) => value.trim() !== "" && value.length >= 10);
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
    error: shippingStreetError,
    isValid: shippingStreetValid,
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

  let formIsValid = false;

  if (
    billingCityValid &&
    billingStateValid &&
    billingStreetValid &&
    billingZipValid &&
    birthValid &&
    cardValid &&
    companyValid &&
    emailValid &&
    expirationValid &&
    nameValid &&
    phoneValid &&
    shippingCityValid &&
    shippingStateValid &&
    shippingStreetValid &&
    shippingZipValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const general = {
      birth: DateTime.fromISO(birth).toFormat("MM-dd-yyyy"),
      email: email,
      name: name,
      phone: phone,
    };
    const payment = {
      billing: {
        city: billingCity,
        state: billingState,
        street: billingStreet,
        zip: billingZip,
      },
      card_number: card,
      card_company: company,
      card_expiration: expiration,
    };
    const shippingInfo = {
      city: equals ? billingCity : shippingCity,
      state: equals ? billingState : shippingState,
      street: equals ? billingStreet : shippingStreet,
      zip: equals ? billingZip : shippingZip,
    };
    const order = {
      shipping_type: shipping.id,
      arrival_date: shipping.date,
      products: shoppingCart,
      order_date: DateTime.now().toFormat("MM-dd-yyyy"),
      receipt: randomstring.generate(),
    };
    console.log("general", general);
    console.log("order", order);
    console.log("payment", payment);
    console.log("shipping info", shippingInfo);
    if (formIsValid) {
      billingCityReset();
      billingStateReset();
      billingStreetReset();
      billingZipReset();
      birthReset();
      cardReset();
      companyReset();
      emailReset();
      expirationReset();
      nameReset();
      phoneReset();
      shippingCityReset();
      shippingStateReset();
      shippingStreetReset();
      shippingZipReset();
    }
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
        birth={birth}
        birthClassName={birthClassName}
        birthError={birthError}
        birthOnBlur={birthOnBlur}
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
        phoneClassName={phoneClassName}
        phoneError={phoneError}
        phoneOnBlur={phoneOnBlur}
        phoneOnChange={phoneOnChange}
      />
      <BillingAddress
        billingCity={billingCity}
        billingCityClassName={billingCityClassName}
        billingCityError={billingCityError}
        billingCityOnBlur={billingCityOnBlur}
        billingCityOnChange={billingCityOnChange}
        billingState={billingState}
        billingStateClassName={billingCityClassName}
        billingStateError={billingStateError}
        billingStateOnBlur={billingStateOnBlur}
        billingStateOnChange={billingStateOnChange}
        billingStreet={billingStreet}
        billingStreetClassName={billingStreetClassName}
        billingStreetError={billingStreetError}
        billingStreetOnBlur={billingStreetOnBlur}
        billingStreetOnChange={billingStreetOnChange}
        billingZip={billingZip}
        billingZipClassName={billingZipClassName}
        billingZipError={billingZipError}
        billingZipOnBlur={billingZipOnBlur}
        billingZipOnChange={billingZipOnChange}
      />
      <ShippingAddress
        shippingCity={shippingCity}
        shippingCityClassName={shippingCityClassName}
        shippingCityError={shippingCityError}
        shippingCityOnBlur={shippingCityOnBlur}
        shippingCityOnChange={shippingCityOnChange}
        shippingState={shippingState}
        shippingStateClassName={shippingStateClassName}
        shippingStateError={shippingStateError}
        shippingStateOnBlur={shippingStateOnBlur}
        shippingStateOnChange={shippingStateOnChange}
        shippingStreet={shippingStreet}
        shippingStreetClassName={shippingStreetClassName}
        shippingStreetError={shippingStreetError}
        shippingStreetOnBlur={shippingStreetOnBlur}
        shippingStreetOnChange={shippingStreetOnChange}
        shippingZip={shippingZip}
        shippingZipClassName={shippingZipClassName}
        shippingZipError={shippingZipError}
        shippingZipOnBlur={shippingZipOnBlur}
        shippingZipOnChange={shippingZipOnChange}
        equals={equals}
      />
      <Input
        checked={equals}
        id={"equals"}
        type={"checkbox"}
        value={equals}
        onChangeHandler={equalsHandler}
      >
        Same as billing
      </Input>
      <PaymentInfo
        card={card}
        cardClassName={cardClassName}
        cardError={cardError}
        cardOnBlur={cardOnBlur}
        cardOnChange={cardOnChange}
        company={company}
        companyClassName={companyClassName}
        companyError={companyError}
        companyOnBlur={companyOnBlur}
        companyOnChange={companyOnChange}
        expiration={expiration}
        expirationClassName={expirationClassName}
        expirationError={expirationError}
        expirationOnBlur={expirationOnBlur}
        expirationOnChange={expirationOnChange}
      />
      <Shipping setValue={setShipping} />
      <div className={styles.btn_wrapper}>
        <Button background={"success"}>Finish Order</Button>
      </div>
    </form>
  );
};

export default CheckoutCard;
