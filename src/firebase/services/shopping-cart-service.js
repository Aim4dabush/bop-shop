import { cartActions } from "../../redux/slices/cartSlice";
import { notificationActions } from "../../redux/slices/notificationSlice";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { get, onValue, ref, set } from "firebase/database";

//utils
import { getUserData } from "../../utils/user-data";

const user = getUserData();
const shopRef = ref(realtimeDB, `users/${user?.id}/shop`);

export const getShoppingCart = () => {
  return (dispatch) => {
    let shoppingCart = [];
    try {
      onValue(shopRef, (result) => {
        if (!result.val()) {
          dispatch(cartActions.setShopCart(shoppingCart));
          return;
        }

        shoppingCart = result.val().cart;
        dispatch(cartActions.setShopCart(shoppingCart));
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

export const postShoppingCart = (data) => {
  return async (dispatch) => {
    let cart = [];
    try {
      const result = await get(shopRef);

      if (!result.val()) {
        cart.push(data);
        set(shopRef, { cart });
        dispatch(
          notificationActions.setInfo({
            show: true,
            status: "Success",
            message: "Item added to shopping cart successfully",
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

      set(shopRef, { cart: newCart });
      dispatch(getShoppingCart());
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: "Item added to shopping cart successfully",
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

export const deleteItem = (id) => {
  return async (dispatch) => {
    let cart = [];
    try {
      const result = await get(shopRef);

      if (!result.val()) {
        return;
      }

      cart = result.val().cart;
      const newCart = cart.reduce((arr, item) => {
        if (item.id === id) {
          return [...arr];
        } else {
          return [...arr, item];
        }
      }, []);

      set(shopRef, { cart: newCart });
      dispatch(getShoppingCart());
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: "Item deleted from shopping cart successfully",
        })
      );
    } catch (err) {}
  };
};
