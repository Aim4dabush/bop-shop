import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
  },
  reducers: {
    setHistory(state, actions) {
      state.history = [];
      state.history = actions.payload;
    },
    setHistoryReset(state) {
      state.history = [];
    },
  },
});

export const historyActions = historySlice.actions;
export default historySlice.reducer;
