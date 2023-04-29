import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: {},
    shopCart: [],
    wishCart: [],
  },
  reducers: {
    setData(state, action) {
      state.data = {};
      state.data = action.payload;
    },
    setShopCart(state, action) {
      state.shopCart = action.payload;
    },
    setShopCartReset(state) {
      state.shopCart = [];
    },
    setWishCart(state, action) {
      state.wishCart = action.payload;
    },
    setWishCartReset(state) {
      state.wishCart = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
