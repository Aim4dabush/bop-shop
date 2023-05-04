import { useState } from "react";

//components
import Button from "../../shared/button/Button";
import ButtonInputGroup from "../../shared/button-input-group/ButtonInputGroup";

//luxon
import { DateTime } from "luxon";

//react icons
import { FaCartPlus, FaHeart } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { postShoppingCart } from "../../../firebase/services/shopping-cart-service";
import { postWishList } from "../../../firebase/services/wish-list-service";

//styles
import styles from "./DetailsCard.module.scss";

const DetailsCard = () => {
  const dispatch = useDispatch();
  const {
    brand,
    category,
    description,
    id,
    images,
    mainPic,
    price,
    rating,
    stock,
    title,
  } = useSelector((state) => state.products.product);
  const [quantity, setQuantity] = useState(1);

  const shopHandler = () => {
    const post = {
      brand,
      category,
      description,
      id,
      mainPic,
      price,
      quantity: parseInt(quantity),
      rating,
      stock,
      subtotal: parseInt(quantity) * price,
      title,
    };

    dispatch(postShoppingCart(post));
  };

  const wishHandler = () => {
    const post = {
      brand,
      category,
      date: DateTime.now().toFormat("yyyy-MM-dd"),
      description,
      id,
      mainPic,
      price,
      quantity: parseInt(quantity),
      rating,
      stock,
      title,
    };

    dispatch(postWishList(post));
  };

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
            <ButtonInputGroup setValue={setQuantity} value={1} />
          </div>
          <div className={`${styles.row} ${styles.actions}`}>
            <Button
              background={"success"}
              buttonHandler={shopHandler}
              tip={"Add Cart"}
            >
              <FaCartPlus />
            </Button>
            <Button
              background={"warning"}
              buttonHandler={wishHandler}
              tip={"Add Wish"}
            >
              <FaHeart />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
