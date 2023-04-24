import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

//reducers
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
