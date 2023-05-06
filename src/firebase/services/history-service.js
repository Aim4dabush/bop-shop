import { historyActions } from "../../redux/slices/historySlice";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { onValue, ref } from "firebase/database";

const user = JSON.parse(localStorage.getItem("user"));
const historyRef = ref(realtimeDB, `users/${user.id}/order-history`);

export const getOrderHistory = () => {
  return async (dispatch) => {
    onValue(historyRef, (result) => {
      if (!result.val()) {
        return;
      }
      const history = result.val();
      dispatch(historyActions.setHistory(history));
    });
  };
};
