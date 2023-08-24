//Create auth slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models/user";

interface OnlineUsersState {
  onlineUsers: User[];
}

const initialState: OnlineUsersState = {
  onlineUsers: [],
};
const onlineUsersSlice = createSlice({
  name: "onlineUsers",
  initialState,
  reducers: {
    setOnlineUsers(state, action: PayloadAction<User[]>) {
      state.onlineUsers = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.onlineUsers = [...state.onlineUsers, action.payload];
    },
  },
});

export const { setOnlineUsers } = onlineUsersSlice.actions;
export default onlineUsersSlice.reducer;
