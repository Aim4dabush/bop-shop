import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

//reducers
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import notificationReducer from "./slices/notificationSlice";
import productsReducer from "./slices/productsSlice";
import windowReducer from "./slices/windowSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  notification: notificationReducer,
  products: productsReducer,
  window: windowReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
