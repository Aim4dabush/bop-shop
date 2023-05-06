import { useEffect, useState } from "react";

//luxon
import { DateTime } from "luxon";

//styles
import styles from "./Shipping.module.scss";

const Shipping = ({ setValue }) => {
  const [boxes, setBoxes] = useState([
    {
      id: "two_day",
      title: "2 Day Shipping",
      date: DateTime.now().plus({ days: 2 }).toFormat("MM-dd-yyyy"),
      checked: false,
    },
    {
      id: "five_day",
      title: "5 Day Shipping",
      date: DateTime.now().plus({ days: 5 }).toFormat("MM-dd-yyyy"),
      checked: false,
    },
    {
      id: "free",
      title: "Free",
      date: DateTime.now().plus({ days: 3, weeks: 1 }).toFormat("MM-dd-yyyy"),
      checked: true,
    },
  ]);

  const checkboxGroupHandler = (e) => {
    const ship = boxes.find((box) => {
      return box.id === e.target.id;
    });
    setValue(ship);
    const newBoxes = filterBoxes(e.target.id);
    setBoxes(newBoxes);
  };

  const filterBoxes = (box) => {
    const newArr = boxes.reduce((arr, item) => {
      if (box === item.id) {
        item.checked = true;
        return [...arr, item];
      } else {
        item.checked = false;
        return [...arr, item];
      }
    }, []);

    return newArr;
  };

  useEffect(() => {
    setValue({
      id: "free",
      title: "Free",
      date: DateTime.now().plus({ days: 3, weeks: 1 }).toFormat("MM-dd-yyyy"),
      checked: true,
    });
  }, [setValue]);

  return (
    <div className={styles.shipping}>
      <h3>Shipping</h3>
      <div className={styles.checkbox_wrapper}>
        {boxes.map((box) => {
          return (
            <div className={styles.checkbox_group_control} key={box.id}>
              <label htmlFor={box.id}>{box.title}</label>
              <input
                id={box.id}
                type="checkbox"
                checked={box.checked}
                onChange={checkboxGroupHandler}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shipping;
