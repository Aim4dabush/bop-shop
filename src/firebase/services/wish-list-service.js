import { cartActions } from "../../redux/slices/cartSlice";
import { notificationActions } from "../../redux/slices/notificationSlice";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { get, onValue, ref, set } from "firebase/database";

//utils
import { getUserData } from "../../utils/user-data";

const user = getUserData();
const wishRef = ref(realtimeDB, `users/${user.id}/wish`);

export const getWishList = () => {
  return (dispatch) => {
    let wishList = [];
    try {
      onValue(wishRef, (result) => {
        if (!result.val()) {
          dispatch(cartActions.setWishCart(wishList));
          return;
        }

        wishList = result.val().cart;
        dispatch(cartActions.setWishCart(wishList));
      });
    } catch (err) {
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Error",
          err: err.message,
        })
      );
    }
  };
};

export const postWishList = (data) => {
  return async (dispatch) => {
    let cart = [];
    try {
      const result = await get(wishRef);
      if (!result.val()) {
        cart.push(data);
        set(wishRef, { cart });
        dispatch(
          notificationActions.setInfo({
            show: true,
            status: "Success",
            message: "Item added to wish list successfully",
          })
        );
        return;
      }

      cart = result.val().cart;

      let duplicate = false;
      const newCart = cart.reduce((arr, item) => {
        if (item.id === data.id) {
          duplicate = true;
          return [...arr, data];
        } else {
          return [...arr, item];
        }
      }, []);

      if (!duplicate) {
        newCart.push(data);
      }

      set(wishRef, { cart: newCart });
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: "Item added to wish list successfully",
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

export const deleteItem = (data) => {
  return async (dispatch) => {
    let cart = [];
    try {
      const result = await get(wishRef);

      if (!result.val()) {
        return;
      }

      cart = result.val().cart;
      const newCart = cart.reduce((arr, item) => {
        if (item.id === data.id) {
          return [...arr];
        } else {
          return [...arr, item];
        }
      }, []);

      set(wishRef, { cart: newCart });
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: "Item deleted from wish list successfully",
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
