//components
import Input from "../../../shared/input/Input";
import InputSelect from "../../../shared/input-select/InputSelect";

//data
import { stateOptions } from "../../../../utils/options-data";

//styles
import styles from "./BillingAddress.module.scss";

const BillingAddress = ({ city, state, street, zip }) => {
  return (
    <div className={styles.billing_address}>
      <h3>Billing Address</h3>
      <div className={styles.row}>
        <Input
          classStyle={street.billingStreetClassName}
          error={street.billingStreetError}
          id={"billing_street"}
          message={"Please fill out street"}
          onBlurHandler={street.billingStreetOnBlur}
          onChangeHandler={street.billingStreetOnChange}
          stretch={true}
          type={"text"}
          value={street.billingStreet}
        >
          Street
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          classStyle={city.billingCityClassName}
          error={city.billingCityError}
          id={"billing_city"}
          message={"Please enter a city"}
          onBlurHandler={city.billingCityOnBlur}
          onChangeHandler={city.billingCityOnChange}
          type={"text"}
          value={city.billingCity}
        >
          City
        </Input>
        <InputSelect
          classStyle={state.billingStateClassName}
          error={state.billingStateError}
          id={"billing_state"}
          message={"Please select a state"}
          onBlurHandler={state.billingStateOnBlur}
          onChangeHandler={state.billingStateOnChange}
          selectOptions={stateOptions}
          spaceLeft={true}
          value={state.billingState}
        >
          State
        </InputSelect>
        <Input
          classStyle={zip.billingZipClassName}
          error={zip.billingZipError}
          id={"billing_zip"}
          message={"Please enter a zip code"}
          onBlurHandler={zip.billingZipOnBlur}
          onChangeHandler={zip.billingZipOnChange}
          type={"number"}
          value={zip.billingZip}
        >
          Zip Code
        </Input>
      </div>
    </div>
  );
};

export default BillingAddress;
