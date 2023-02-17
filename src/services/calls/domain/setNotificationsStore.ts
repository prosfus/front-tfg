import { Notification } from "../../../models/calls";
import { User } from "../../../models/user";
import { setNotificationsStore } from "../infrastructure/setNotificationsStore";

export const setNotificationsDomain = (notifications: Notification[]) => {
  setNotificationsStore(notifications);
};
