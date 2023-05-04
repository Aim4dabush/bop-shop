import { cartActions } from "../../redux/slices/cartSlice";
import { notificationActions } from "../../redux/slices/notificationSlice";

//firebase
import { profileRef } from "../firebaseConfig";

//realtime database
import { onValue, set } from "firebase/database";

export const getUserProfile = () => {
  return (dispatch) => {
    try {
      onValue(profileRef, (results) => {
        if (results.val() === null) {
          console.log("No data found");
          return;
        }

        const data = results.val().info;
        console.log(data);
        dispatch(cartActions.setUserProfile(data));
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

export const postUserProfile = (data) => {
  return (dispatch) => {
    let info = {
      billingAddress: data.billingAddress ? data.billingAddress : {},
      shippingAddress: data.shippingAddress ? data.shippingAddress : {},
      email: data.email ? data.email : "",
      name: data.name ? data.name : "",
    };
    try {
      set(profileRef, { info });
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
