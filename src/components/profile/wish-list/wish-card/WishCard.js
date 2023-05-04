import { useState } from "react";

//components
import Button from "../../../shared/button/Button";
import ButtonInputGroup from "../../../shared/button-input-group/ButtonInputGroup";

//luxon
import { DateTime } from "luxon";

//react icons
import { FaCartPlus, FaTrashAlt, FaUndo } from "react-icons/fa";

//redux
import { useDispatch } from "react-redux";

//services
import { postShoppingCart } from "../../../../firebase/services/shopping-cart-service";
import {
  deleteItem,
  postWishList,
} from "../../../../firebase/services/wish-list-service";

//styles
import styles from "./WishCard.module.scss";

const WishCard = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const addShopCart = () => {
    const post = {
      brand: item.brand,
      category: item.category,
      description: item.description,
      id: item.id,
      mainPic: item.mainPic,
      price: item.price,
      quantity,
      rating: item.rating,
      stock: item.stock,
      subtotal: quantity * item.price,
      title: item.title,
    };

    dispatch(postShoppingCart(post));
    deleteWishCart();
  };

  const deleteWishCart = () => {
    dispatch(deleteItem(item.id));
  };

  const updateWishCart = () => {
    const post = {
      brand: item.brand,
      category: item.category,
      date: DateTime.now().toFormat("yyyy-MM-dd"),
      description: item.description,
      id: item.id,
      mainPic: item.mainPic,
      price: item.price,
      quantity,
      rating: item.rating,
      stock: item.stock,
      subtotal: quantity * item.price,
      title: item.title,
    };

    dispatch(postWishList(post));
  };

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
          <img className={styles.img} src={item.mainPic} alt={item.title} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.row}>
            <p>{item.description}</p>
          </div>
          <div className={`${styles.row} ${styles.otherInfo}`}>
            <p>Rating: {item.rating}</p>
            <p>Stock: {item.stock}</p>
            <p>Price: ${item.price}</p>
            <ButtonInputGroup setValue={setQuantity} value={quantity} />
          </div>
          <div className={`${styles.row} ${styles.actions}`}>
            <Button
              background={"success"}
              tip={"Add Cart"}
              buttonHandler={addShopCart}
            >
              <FaCartPlus />
            </Button>
            <Button
              background={"danger"}
              tip={"Delete"}
              buttonHandler={deleteWishCart}
            >
              <FaTrashAlt />
            </Button>
            <Button
              background={"warning"}
              tip={"Update"}
              buttonHandler={updateWishCart}
            >
              <FaUndo />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
