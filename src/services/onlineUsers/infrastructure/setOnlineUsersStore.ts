import { User } from "../../../models/user";
import { setOnlineUsers } from "../../../store/slices/onlineUsers/onlineUsersSlice";
import store from "../../../store/store";

export const setOnlineUsersStore = (users: User[]) => {
  store.dispatch(setOnlineUsers(users));
};
