import { useState } from "react";

//components
import Button from "../../../shared/button/Button";
import ButtonInputGroup from "../../../shared/button-input-group/ButtonInputGroup";

//react icons
import { FaCartPlus, FaTrashAlt, FaUndo } from "react-icons/fa";

//styles
import styles from "./WishCard.module.scss";

const WishCard = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div className={styles.card}>
      <div className={styles.titleWrapper}>
        <h5>{item.brand}</h5>
        <div className={styles.titleInfo}>
          <h1>{item.title}</h1>
          <p className={styles.date}>added {item.date}</p>
        </div>
        <h5>{item.category}</h5>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imgWrapper}>
          <img src={item.mainPic} alt={item.title} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.row}>
            <p>{item.description}</p>
          </div>
          <div className={`${styles.row} ${styles.otherInfo}`}>
            <p>Rating: {item.rating}</p>
            <p>Stock: {item.stock}</p>
            <p>Price: ${item.price}</p>
            <ButtonInputGroup setValue={setQuantity} />
          </div>
          <div className={`${styles.row} ${styles.actions}`}>
            <Button background={"success"} tip={"Add Cart"}>
              <FaCartPlus />
            </Button>
            <Button background={"danger"} tip={"Delete"}>
              <FaTrashAlt />
            </Button>
            <Button background={"warning"} tip={"Update"}>
              <FaUndo />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
