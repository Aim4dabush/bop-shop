import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    info: {
      show: false,
      status: "",
      message: "",
    },
  },
  reducers: {
    setInfo(state, action) {
      state.info = {
        show: false,
        status: "",
        message: "",
      };

      state.info = action.payload;
    },
    setInfoReset(state) {
      state.info = {
        show: false,
        status: "",
        message: "",
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
