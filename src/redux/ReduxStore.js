import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

//reducers
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import notificationReducer from "./slices/notificationSlice";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  notification: notificationReducer,
  products: productsReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
