import { configureStore } from "@reduxjs/toolkit";

//reducers
import productsReducer from "./slices/productsSlice";

const reduxStore = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default reduxStore;
