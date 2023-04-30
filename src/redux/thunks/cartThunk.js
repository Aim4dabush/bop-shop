import { set, onValue } from "firebase/database";

//actions
import { cartActions } from "../slices/cartSlice";
import { notificationActions } from "../slices/notificationSlice";

//database
import { shopRef, wishRef } from "../../firebase/firebaseConfig";

export const getShopData = () => {
  return (dispatch) => {
    try {
      onValue(shopRef, (results) => {
        const list = results.val()?.cart;
        if (list) {
          dispatch(cartActions.setGetShopCart(list));
        }
      });
    } catch (err) {
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Error",
          message: err.message,
        })
      );
    }
  };
};

export const getWishData = () => {
  return (dispatch) => {
    try {
      onValue(wishRef, (results) => {
        const list = results.val()?.cart;
        dispatch(cartActions.setGetWishCart(list));
      });
    } catch (err) {
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Error",
          message: err.message,
        })
      );
    }
  };
};

export const postShopData = (post) => {
  return (dispatch) => {
    try {
      set(shopRef, { cart: post });
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: `Item has been added to your shopping cart successfully`,
        })
      );
    } catch (err) {
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Error",
          message: err.message,
        })
      );
    }
  };
};

export const postWishData = (post) => {
  return (dispatch) => {
    try {
      set(wishRef, { cart: post });
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: "Item has been added to your wish list successfully",
        })
      );
    } catch (err) {
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Error",
          message: err.message,
        })
      );
    }
  };
};
