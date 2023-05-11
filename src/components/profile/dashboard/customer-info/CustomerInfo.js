import { useState } from "react";

//components
import Address from "./address/Address";
import Button from "../../../shared/button/Button";
import General from "./general/General";

//hooks
import useValidate from "../../../../hooks/useValidation";

//luxon
import { DateTime } from "luxon";

//react icons
import { FaEdit, FaWindowClose } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { postUserProfile } from "../../../../firebase/services/profile-service";

//styles
import styles from "./CustomerInfo.module.scss";

const CustomerInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);
  const { value: birth, onChangeHandler: birthOnChange } = useValidate(
    (value) => value.trim() !== "",
    ""
  );
  const { value: city, onChangeHandler: cityOnChange } = useValidate(
    (value) => value.trim() !== "",
    ""
  );
  const { value: email, onChangeHandler: emailOnChange } = useValidate(
    (value) => value.includes("@"),
    ""
  );
  const { value: name, onChangeHandler: nameOnChange } = useValidate(
    (value) => value.trim() !== "",
    ""
  );
  const { value: state, onChangeHandler: stateOnChange } = useValidate(
    (value) => value.trim() !== "",
    ""
  );
  const { value: street, onChangeHandler: streetOnChange } = useValidate(
    (value) => value.trim() !== "",
    ""
  );
  const { value: phone, onChangeHandler: phoneOnChange } = useValidate(
    (value) => value.trim() !== "",
    ""
  );
  const { value: zip, onChangeHandler: zipOnChange } = useValidate(
    (value) => value.trim() !== "",
    ""
  );

  const editHandler = () => {
    setEdit((prev) => (prev = !prev));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      birth: DateTime.fromISO(birth).toFormat("MM-dd-yyyy"),
      city,
      email,
      id: user.id,
      name,
      phone,
      state,
      street,
      zip,
    };
    dispatch(postUserProfile(data));
    setEdit((prev) => (prev = !prev));
  };

  return (
    <div className={styles.customer_wrapper}>
      <h1 className={styles.customer_title}>Customer Info</h1>
      <div className={styles.btn_wrapper}>
        {edit ? (
          <Button
            background={"danger"}
            buttonHandler={submitHandler}
            type={"submit"}
          >
            <FaWindowClose />
          </Button>
        ) : (
          <Button background={"warning"} buttonHandler={editHandler}>
            <FaEdit />
          </Button>
        )}
      </div>
      <form className={styles.form}>
        <General
          birth={birth}
          birthOnChange={birthOnChange}
          edit={edit}
          email={email}
          emailOnChange={emailOnChange}
          name={name}
          nameOnChange={nameOnChange}
          phone={phone}
          phoneOnChange={phoneOnChange}
        />
        <Address
          city={city}
          cityOnChange={cityOnChange}
          edit={edit}
          state={state}
          stateOnChange={stateOnChange}
          street={street}
          streetOnChange={streetOnChange}
          zip={zip}
          zipOnChange={zipOnChange}
        />
      </form>
    </div>
  );
};

export default CustomerInfo;
