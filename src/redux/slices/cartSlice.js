import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shopCart: [],
    wishCart: [],
  },
  reducers: {
    setShopCart(state, action) {
      state.shopCart = [];
      state.shopCart = action.payload;
    },
    setShopCartReset(state) {
      state.shopCart = [];
    },
    setWishCart(state, action) {
      state.wishCart = [];
      state.wishCart = action.payload;
    },
    setWishCartReset(state) {
      state.wishCart = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
