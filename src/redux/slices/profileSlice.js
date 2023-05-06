import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
  },
  reducers: {
    setProfile(state, action) {
      state.profile = {};
      state.profile = action.payload;
    },
    setProfileReset(state) {
      state.profile = null;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
