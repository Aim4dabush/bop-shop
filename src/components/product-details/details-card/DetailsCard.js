//components
import Button from "../../shared/button/Button";
import ButtonInputGroup from "../../shared/button-input-group/ButtonInputGroup";

//react icons
import { FaCartPlus, FaHeart } from "react-icons/fa";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./DetailsCard.module.scss";

const DetailsCard = () => {
  const { brand, category, description, mainPic, price, rating, stock, title } =
    useSelector((state) => state.products.product);

  return (
    <div className={styles.card}>
      <div className={styles.titleWrapper}>
        <h5>{brand}</h5>
        <h1>{title}</h1>
        <h5>{category}</h5>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imgWrapper}>
          <img src={mainPic} alt={title} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.row}>
            <p>{description}</p>
          </div>
          <div className={`${styles.row} ${styles.otherInfo}`}>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
            <p>Price: ${price}</p>
            <ButtonInputGroup value={0} />
          </div>
          <div className={`${styles.row} ${styles.actions}`}>
            <Button background={"success"}>
              <FaCartPlus />
              Cart
            </Button>
            <Button background={"warning"}>
              <FaHeart />
              Wish List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
