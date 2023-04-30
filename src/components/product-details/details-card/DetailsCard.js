import { useEffect, useState } from "react";

//actions
import { cartActions } from "../../../redux/slices/cartSlice";

//components
import Button from "../../shared/button/Button";
import ButtonInputGroup from "../../shared/button-input-group/ButtonInputGroup";

//luxon
import { DateTime } from "luxon";

//react icons
import { FaCartPlus, FaHeart } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";

//styles
import styles from "./DetailsCard.module.scss";

//thunk
import { postShopData, postWishData } from "../../../redux/thunks/cartThunk";

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
  const loadData = useSelector((state) => state.cart.loadData);
  const shopData = useSelector((state) => state.cart.postShopCart);
  const { windowSize } = useSelector((state) => state.window);
  const wishData = useSelector((state) => state.cart.postWishCart);
  const [quantity, setQuantity] = useState(1);
  console.log(windowSize);

  const shopHandler = () => {
    const post = {
      brand,
      category,
      description,
      id,
      images,
      mainPic,
      price,
      quantity: parseInt(quantity),
      rating,
      stock,
      subtotal: parseInt(quantity) * price,
      title,
    };

    const index = shopData.findIndex((item) => {
      return item.id === post.id;
    });

    if (index >= 0) {
      dispatch(
        cartActions.setReplaceDuplicateShopItem({ index, duplicate: post })
      );
    } else {
      dispatch(cartActions.setPostShopCart(post));
    }

    dispatch(cartActions.setLoadData(true));
  };

  const wishHandler = () => {
    const post = {
      brand,
      category,
      date: DateTime.now().toFormat("yyyy-MM-dd"),
      description,
      id,
      images,
      mainPic,
      price,
      quantity: parseInt(quantity),
      rating,
      stock,
      title,
    };

    const index = wishData.findIndex((item) => {
      return item.id === post.id;
    });

    if (index >= 0) {
      dispatch(
        cartActions.setReplaceDuplicateWishItem({
          index,
          duplicate: post,
        })
      );
    } else {
      dispatch(cartActions.setPostWishCart(post));
    }
    dispatch(cartActions.setLoadData(true));
  };

  useEffect(() => {
    if (loadData) {
      dispatch(postShopData(shopData));
      dispatch(postWishData(wishData));
      dispatch(cartActions.setLoadData(false));
    }
  }, [dispatch, loadData, shopData, wishData]);
  return (
    <div className={`${styles.card} ${windowSize <= 1280 && styles.nest}`}>
      <div className={styles.titleWrapper}>
        <h5>{brand}</h5>
        <h1>{title}</h1>
        <h5>{category}</h5>
      </div>
      <div className={`${styles.contentWrapper} ${styles.air}`}>
        <div className={styles.imgWrapper}>
          <img src={mainPic} alt={title} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.row}>
            <p>{description}</p>
          </div>
          <div
            className={`${styles.row} ${styles.otherInfo} ${
              windowSize <= 280 && styles.fold
            }`}
          >
            <div className={styles.rowTwo}>
              <p>Rating: {rating}</p>
              <p>Stock: {stock}</p>
            </div>
            <div className={styles.rowTwo}>
              <p>Price: ${price}</p>
              <ButtonInputGroup setValue={setQuantity} />
            </div>
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
