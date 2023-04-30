import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loadData: false,
    getShopCart: [],
    getWishCart: [],
    postShopCart: [],
    postWishCart: [],
  },
  reducers: {
    setGetShopCart(state, action) {
      state.getShopCart = [];
      state.getShopCart = action.payload;
    },
    setGetWishCart(state, action) {
      state.getWishCart = [];
      state.getWishCart = action.payload;
    },
    setLoadData(state, action) {
      state.loadData = action.payload;
    },
    setPostShopCart(state, action) {
      state.postShopCart.push(action.payload);
    },
    setPostShopCartReset(state) {
      state.postShopCart = [];
    },
    setPostWishCart(state, action) {
      state.postWishCart.push(action.payload);
    },
    setPostWishCartReset(state) {
      state.postWishCart = [];
    },
    setReplaceDuplicateShopItem(state, action) {
      state.postShopCart.splice(
        action.payload.index,
        1,
        action.payload.duplicate
      );
    },
    setReplaceDuplicateWishItem(state, action) {
      state.postWishCart.splice(
        action.payload.index,
        1,
        action.payload.duplicate
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
