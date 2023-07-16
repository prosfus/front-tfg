import { Notification, NotificationOrientation } from "../../../models/calls";
import { User } from "../../../models/user";
import { getNotificationsStore } from "../infrastructure/getNotificationsStore";
import { setNotificationsDomain } from "./setNotificationsStore";

export const pushNotification = (
  user: User,
  orientation: NotificationOrientation,
  callId: string
) => {
  const notifications = getNotificationsStore(false);
  const newNotification = { user, orientation, callId } as Notification;

  setNotificationsDomain([...notifications, newNotification]);
};
