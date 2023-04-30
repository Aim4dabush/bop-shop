import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
  name: "window",
  initialState: {
    windowSize: 0,
  },
  reducers: {
    setWindowSize(state, action) {
      state.windowSize = action.payload;
    },
  },
});

export const windowActions = windowSlice.actions;
export default windowSlice.reducer;
