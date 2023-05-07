import { historyActions } from "../../redux/slices/historySlice";
import { notificationActions } from "../../redux/slices/notificationSlice";

//data
import { getUserData } from "../../utils/user-data";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { get, onValue, ref, set } from "firebase/database";

const user = getUserData();
const orderRef = ref(realtimeDB, `users/${user?.id}/orders`);

export const getOrderHistory = () => {
  return (dispatch) => {
    try {
      onValue(orderRef, (result) => {
        if (!result) {
          return;
        }

        const orders = result.val().receipts;
        dispatch(historyActions.setHistory(orders));
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

export const postOrder = () => {
  return async (dispatch) => {
    try {
      const result = await get(orderRef);
      if (!result.val()) {
        return;
      }
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
