import { User } from "../../../models/user";
import { setUser } from "../../../store/slices/auth/userSlice";
import store from "../../../store/store";

export const setUserStore = (user: User) => {
  store.dispatch(setUser(user));
};
