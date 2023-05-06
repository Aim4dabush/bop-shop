//components
import Input from "../../../shared/input/Input";
import Select from "../../../shared/select/Select";

//data
import { stateOptions } from "../../../../utils/options-data";

//styles
import styles from "./BillingAddress.module.scss";

const BillingAddress = ({
  billingCity,
  billingCityClassName,
  billingCityError,
  billingCityOnBlur,
  billingCityOnChange,
  billingState,
  billingStateClassName,
  billingStateError,
  billingStateOnBlur,
  billingStateOnChange,
  billingStreet,
  billingStreetClassName,
  billingStreetError,
  billingStreetOnBlur,
  billingStreetOnChange,
  billingZip,
  billingZipClassName,
  billingZipError,
  billingZipOnBlur,
  billingZipOnChange,
}) => {
  return (
    <div className={styles.billing_address}>
      <h3>Billing Address</h3>
      <div className={styles.row}>
        <Input
          classStyle={billingStreetClassName}
          error={billingStreetError}
          id={"billing_street"}
          message={"Please fill out street"}
          onBlurHandler={billingStreetOnBlur}
          onChangeHandler={billingStreetOnChange}
          stretch={true}
          type={"text"}
          value={billingStreet}
        >
          Street
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          classStyle={billingCityClassName}
          error={billingCityError}
          id={"billing_city"}
          message={"Please enter a city"}
          onBlurHandler={billingCityOnBlur}
          onChangeHandler={billingCityOnChange}
          type={"text"}
          value={billingCity}
        >
          City
        </Input>
        <Select
          classStyle={billingStateClassName}
          error={billingStateError}
          id={"billing_state"}
          message={"Please select a state"}
          onBlurHandler={billingStateOnBlur}
          onChangeHandler={billingStateOnChange}
          selectOptions={stateOptions}
          padding={true}
          value={billingState}
        >
          State
        </Select>
        <Input
          classStyle={billingZipClassName}
          error={billingZipError}
          id={"billing_zip"}
          message={"Please enter a zip code"}
          onBlurHandler={billingZipOnBlur}
          onChangeHandler={billingZipOnChange}
          type={"number"}
          value={billingZip}
        >
          Zip Code
        </Input>
      </div>
    </div>
  );
};

export default BillingAddress;
