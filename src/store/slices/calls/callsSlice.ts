//Create notifications slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Call, Notification } from "../../../models/calls";

interface CallsSliceState {
  notifications: Notification[];
  call: Call | null;
}

const initialState: CallsSliceState = {
  notifications: [],
  call: null,
};
const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    setNotifications(state, action: PayloadAction<Notification[]>) {
      state.notifications = action.payload;
    },
    setCalls(state, action: PayloadAction<Call | null>) {
      state.call = action.payload;
    },
  },
});

export const { setNotifications, setCalls } = callsSlice.actions;
export default callsSlice.reducer;
