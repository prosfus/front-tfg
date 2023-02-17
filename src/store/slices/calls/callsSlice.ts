//Create notifications slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models/user";

interface CallsSliceState {
  notifications: User[];
}

const initialState: CallsSliceState = {
  notifications: [],
};
const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    setNotifications(state, action: PayloadAction<User[]>) {
      state.notifications = action.payload;
    },
  },
});

export const { setNotifications } = callsSlice.actions;
export default callsSlice.reducer;
