import { getNotificationsDomain } from "../../services/calls/domain/getNotificationsDomain";
import { NotificationItem } from "./NotificationItem";

export const NotificationsPanel = () => {
  const notifications = getNotificationsDomain(true);

  return (
    <div className="flex flex-row flex-wrap gap-[100px] overflow-y-auto">
      {notifications.map((notification, key) => {
        return <NotificationItem key={key} notification={notification} />;
      })}
    </div>
  );
};
