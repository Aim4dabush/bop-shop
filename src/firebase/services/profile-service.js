import { notificationActions } from "../../redux/slices/notificationSlice";
import { profileActions } from "../../redux/slices/profileSlice";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { onValue, ref, set } from "firebase/database";

export const getUserProfile = (user) => {
  return (dispatch) => {
    const profileRef = ref(realtimeDB, `users/${user.id}/profile`);
    try {
      onValue(profileRef, (results) => {
        if (results.val() === null) {
          console.log("No data found");
          return;
        }

        const data = results.val().info;
        dispatch(profileActions.setProfile(data));
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
    const profileRef = ref(realtimeDB, `users/${data.id}/profile`);
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
