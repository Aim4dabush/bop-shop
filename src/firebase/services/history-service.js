import { historyActions } from "../../redux/slices/historySlice";

//data
import { getUserData } from "../../utils/user-data";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { onValue, ref } from "firebase/database";

const user = getUserData();
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
