import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shopCart: [],
    userProfile: null,
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
    setUserProfile(state, action) {
      state.userProfile = null;
      state.userProfile = action.payload;
    },
    setUserProfileReset(state) {
      state.userProfile = null;
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
