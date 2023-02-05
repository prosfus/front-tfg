//Create auth slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseApp } from "firebase/app";
import { User } from "../../../models/user";

interface UserState {
  isLogged: boolean;
  user?: User;
  websocketId?: string;
}

const initialState: UserState = {
  isLogged: false,
  user: undefined,
  websocketId: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogged(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setWebsocketId(state, action: PayloadAction<string>) {
      state.websocketId = action.payload;
    },
  },
});

export const { setIsLogged, setUser, setWebsocketId } = userSlice.actions;
export default userSlice.reducer;
