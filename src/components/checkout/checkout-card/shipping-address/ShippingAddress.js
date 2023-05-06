//components
import Input from "../../../shared/input/Input";
import InputSelect from "../../../shared/input-select/InputSelect";

//data
import { stateOptions } from "../../../../utils/options-data";

//styles
import styles from "./ShippingAddress.module.scss";

const ShippingAddress = ({
  shippingCity,
  shippingCityClassName,
  shippingCityError,
  shippingCityOnBlur,
  shippingCityOnChange,
  equals,
  shippingState,
  shippingStateClassName,
  shippingStateError,
  shippingStateOnBlur,
  shippingStateOnChange,
  shippingStreet,
  shippingStreetClassName,
  shippingStreetError,
  shippingStreetOnBlur,
  shippingStreetOnChange,
  shippingZip,
  shippingZipClassName,
  shippingZipError,
  shippingZipOnBlur,
  shippingZipOnChange,
}) => {
  return (
    <div className={styles.shipping_address}>
      <h3>Shipping Address</h3>
      <div className={styles.row}>
        <Input
          classStyle={shippingStreetClassName}
          disable={equals}
          error={shippingStreetError}
          id={"shipping_street"}
          message={"Please fill out street"}
          onBlurHandler={shippingStreetOnBlur}
          onChangeHandler={shippingStreetOnChange}
          stretch={true}
          type={"text"}
          value={shippingStreet}
        >
          Street
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          classStyle={shippingCityClassName}
          disable={equals}
          error={shippingCityError}
          id={"shipping_city"}
          message={"Please enter a city"}
          onBlurHandler={shippingCityOnBlur}
          onChangeHandler={shippingCityOnChange}
          type={"text"}
          value={shippingCity}
        >
          City
        </Input>
        <InputSelect
          classStyle={shippingStateClassName}
          disable={equals}
          error={shippingStateError}
          id={"shipping_state"}
          message={"Please select a state"}
          onBlurHandler={shippingStateOnBlur}
          onChangeHandler={shippingStateOnChange}
          selectOptions={stateOptions}
          spaceLeft={true}
          value={shippingState}
        >
          State
        </InputSelect>
        <Input
          classStyle={shippingZipClassName}
          disable={equals}
          error={shippingZipError}
          id={"shipping_zip"}
          message={"Please enter a zip code"}
          onBlurHandler={shippingZipOnBlur}
          onChangeHandler={shippingZipOnChange}
          type={"number"}
          value={shippingZip}
        >
          Zip Code
        </Input>
      </div>
    </div>
  );
};

export default ShippingAddress;
