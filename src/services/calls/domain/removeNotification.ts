import { Notification } from "../../../models/calls";
import { setNotifications } from "../../../store/slices/calls/callsSlice";
import { getNotificationsStore } from "../infrastructure/getNotificationsStore";

export const removeNotification = (notification: Notification) => {
  const notifications = getNotificationsStore(false);
  const newNotifications = notifications.filter(
    (n) => n.callId !== notification.callId
  );
  setNotifications(newNotifications);
};
