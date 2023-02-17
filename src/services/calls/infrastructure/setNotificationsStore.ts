import { Notification } from "../../../models/calls";
import { User } from "../../../models/user";
import { setNotifications } from "../../../store/slices/calls/callsSlice";
import store from "../../../store/store";

export const setNotificationsStore = (notifications: Notification[]) => {
  store.dispatch(setNotifications(notifications));
};
