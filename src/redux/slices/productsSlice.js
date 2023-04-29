import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: {},
    products: [],
  },
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
