import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

//reducers
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import historyReducer from "./slices/historySlice";
import notificationReducer from "./slices/notificationSlice";
import productsReducer from "./slices/productsSlice";
import profileReducer from "./slices/profileSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  history: historyReducer,
  notification: notificationReducer,
  products: productsReducer,
  profile: profileReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
