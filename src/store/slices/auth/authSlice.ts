//Create auth slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseApp } from "firebase/app";

interface AuthState {
  app?: FirebaseApp;
}

const initialState: AuthState = {
  app: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setApp(state, action: PayloadAction<FirebaseApp>) {
      state.app = action.payload;
    },
  },
});

export const { setApp } = authSlice.actions;
export default authSlice.reducer;
