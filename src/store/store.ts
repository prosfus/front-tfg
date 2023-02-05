import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/auth/userSlice";
import onlineUsersReducer from "./slices/onlineUsers/onlineUsersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    onlineUsers: onlineUsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
