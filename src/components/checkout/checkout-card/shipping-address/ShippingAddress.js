//components
import Input from "../../../shared/input/Input";
import InputSelect from "../../../shared/input-select/InputSelect";

//data
import { stateOptions } from "../../../../utils/options-data";

//styles
import styles from "./ShippingAddress.module.scss";

const ShippingAddress = ({ city, state, street, zip }) => {
  return (
    <div className={styles.shipping_address}>
      <h3>Shipping Address</h3>
      <div className={styles.row}>
        <Input
          classStyle={street.shippingStreetClassName}
          error={street.shippingStreetError}
          id={"shipping_street"}
          message={"Please fill out street"}
          onBlurHandler={street.shippingStreetOnBlur}
          onChangeHandler={street.shippingStreetOnChange}
          stretch={true}
          type={"text"}
          value={street.shippingStreet}
        >
          Street
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          classStyle={city.shippingCityClassName}
          error={city.shippingCityError}
          id={"shipping_city"}
          message={"Please enter a city"}
          onBlurHandler={city.shippingCityOnBlur}
          onChangeHandler={city.shippingCityOnChange}
          type={"text"}
          value={city.shippingCity}
        >
          City
        </Input>
        <InputSelect
          classStyle={state.shippingStateClassName}
          error={state.shippingStateError}
          id={"shipping_state"}
          message={"Please select a state"}
          onBlurHandler={state.shippingStateOnBlur}
          onChangeHandler={state.shippingStateOnChange}
          selectOptions={stateOptions}
          spaceLeft={true}
          value={state.shippingState}
        >
          State
        </InputSelect>
        <Input
          classStyle={zip.shippingZipClassName}
          error={zip.shippingZipError}
          id={"shipping_zip"}
          message={"Please enter a zip code"}
          onBlurHandler={zip.shippingZipOnBlur}
          onChangeHandler={zip.shippingZipOnChange}
          type={"number"}
          value={zip.shippingZip}
        >
          Zip Code
        </Input>
      </div>
    </div>
  );
};

export default ShippingAddress;
