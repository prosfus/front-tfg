import { User } from "../../../models/user";
import { setNotifications } from "../../../store/slices/calls/callsSlice";
import store from "../../../store/store";

export const setNotificationsStore = (notifications: User[]) => {
  store.dispatch(setNotifications(notifications));
};
