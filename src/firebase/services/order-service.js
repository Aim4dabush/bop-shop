import { historyActions } from "../../redux/slices/historySlice";
import { notificationActions } from "../../redux/slices/notificationSlice";

//data
import { getUserData } from "../../utils/user-data";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { get, onValue, ref, set } from "firebase/database";

//service
import { postUserProfile } from "./profile-service";

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

export const postOrder = (billing, general, order, payment, shippingInfo) => {
  return async (dispatch) => {
    let receipts = [];
    let orderInfo = {
      customer: {
        email: general.email,
        name: general.name,
        phone: general.phone,
        id: user.id,
      },
      payment: {
        card_company: payment.card_company,
        card_expiration: payment.card_expiration,
        card_number: payment.card_number,
      },
      order: {
        arrival_date: order.arrival_date,
        city: shippingInfo.city,
        products: order.products,
        order_date: order.order_date,
        order_total: order.order_total,
        receipt: order.receipt,
        state: shippingInfo.state,
        street: shippingInfo.street,
        zip: shippingInfo.zip,
      },
    };
    let profile = {
      id: user.id,
      city: billing.city,
      email: general.email,
      name: general.name,
      phone: general.phone,
      state: billing.state,
      street: billing.street,
      zip: billing.zip,
    };
    try {
      const result = await get(orderRef);
      if (!result.val()) {
        receipts.push(orderInfo);
        set(orderRef, { receipts });
        dispatch(postUserProfile(profile));
        return;
      }

      receipts = result.val().receipts;

      receipts.push(orderInfo);
      set(orderRef, { receipts });
      dispatch(postUserProfile(profile));
      dispatch(getOrderHistory());
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

export const deleteOrder = (receipt) => {
  return async (dispatch) => {
    let receipts = [];
    try {
      const result = await get(orderRef);

      if (!result.val()) {
        return;
      }

      receipts = result.val().receipts;
      const newReceipts = receipts.reduce((arr, item) => {
        if (item.order.receipt === receipt) {
          return [...arr];
        } else {
          return [...arr, item];
        }
      }, []);
      set(orderRef, { receipts: newReceipts });
      dispatch(getOrderHistory());
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: `receipt #${receipt} has been returned successfully`,
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
