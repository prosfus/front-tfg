//Create notifications slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "../../../models/calls";

interface CallsSliceState {
  notifications: Notification[];
}

const initialState: CallsSliceState = {
  notifications: [],
};
const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    setNotifications(state, action: PayloadAction<Notification[]>) {
      state.notifications = action.payload;
    },
  },
});

export const { setNotifications } = callsSlice.actions;
export default callsSlice.reducer;
