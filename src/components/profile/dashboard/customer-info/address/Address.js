//components
import Input from "../../../../shared/input/Input";
import Select from "../../../../shared/select/Select";

//data
import { stateOptions } from "../../../../../utils/options-data";

//styles
import styles from "./Address.module.scss";

const Address = ({
  city,
  cityOnChange,
  edit,
  state,
  stateOnChange,
  street,
  streetOnChange,
  zip,
  zipOnChange,
}) => {
  return (
    <div className={styles.address_wrapper}>
      <h3>Address</h3>
      <div className={styles.row}>
        <Input
          disable={!edit}
          id={"street"}
          stretch={true}
          type={"text"}
          value={city}
          onChangeHandler={cityOnChange}
        >
          Street
        </Input>
      </div>
      <div className={styles.row}>
        <Input
          disable={!edit}
          id={"city"}
          stretch={true}
          value={city}
          onChangeHandler={cityOnChange}
        >
          City
        </Input>
        <Select
          disable={!edit}
          id={"state"}
          stretch={true}
          value={state}
          selectOptions={stateOptions}
          onChangeHandler={stateOnChange}
        >
          State
        </Select>
        <Input
          disable={!edit}
          id={"zip"}
          stretch={true}
          value={zip}
          onChangeHandler={zipOnChange}
        >
          Zip
        </Input>
      </div>
    </div>
  );
};

export default Address;
