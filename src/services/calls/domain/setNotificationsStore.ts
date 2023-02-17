import { User } from "../../../models/user";
import { setNotificationsStore } from "../infrastructure/setNotificationsStore";

export const setNotificationsDomain = (notifications: User[]) => {
  setNotificationsStore(notifications);
};
