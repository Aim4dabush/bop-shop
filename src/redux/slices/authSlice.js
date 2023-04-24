import { createSlice } from "@reduxjs/toolkit";

let userStorage = JSON.parse(localStorage.getItem("user"));
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userStorage ? userStorage : {},
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUserReset(state) {
      state.user = {};
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
