//Create notifications slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Call, Notification } from "../../../models/calls";

interface CallsSliceState {
  notifications: Notification[];
  calls: Call[];
}

const initialState: CallsSliceState = {
  notifications: [],
  calls: [],
};
const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    setNotifications(state, action: PayloadAction<Notification[]>) {
      state.notifications = action.payload;
    },
    setCalls(state, action: PayloadAction<Call[]>) {
      state.calls = action.payload;
    },
  },
});

export const { setNotifications, setCalls } = callsSlice.actions;
export default callsSlice.reducer;
