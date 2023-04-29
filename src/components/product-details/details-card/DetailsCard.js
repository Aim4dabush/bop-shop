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
  const shop = useSelector((state) => state.cart.postShopCart);
  const wish = useSelector((state) => state.cart.postWishCart);
  const [quantity, setQuantity] = useState(1);

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

    const index = shop.findIndex((item) => {
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

    const index = wish.findIndex((item) => {
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
      dispatch(postShopData(shop));
      dispatch(postWishData(wish));
      dispatch(cartActions.setLoadData(false));
    }
  }, [dispatch, loadData, shop, wish]);
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
            <ButtonInputGroup setValue={setQuantity} />
          </div>
          <div className={`${styles.row} ${styles.actions}`}>
            <Button background={"success"} buttonHandler={shopHandler}>
              <FaCartPlus />
              Cart
            </Button>
            <Button background={"warning"} buttonHandler={wishHandler}>
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
