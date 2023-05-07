import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
  },
  reducers: {
    setProfile(state, action) {
      state.profile = {};
      state.profile = action.payload;
    },
    setProfileReset(state) {
      state.profile = {};
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
