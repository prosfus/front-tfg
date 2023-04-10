import { useEffect, useState } from "react";
import { PhoneSvg } from "../../../assets/phoneSvg";
import { User } from "../../../models/user";
import { getNotificationsDomain } from "../../../services/calls/domain/getNotificationsDomain";
import { NotificationItem } from "./NotificationItem";

export const NotificationsPanel = () => {
  const notifications = getNotificationsDomain(true);
  const bottom = notifications.length > 0 ? "bottom-0" : "-bottom-80";

  return (
    <div
      className={
        "absolute " +
        bottom +
        " h-[300px] bg-secondary-gray2 py-5 w-[636px] rounded-t-md flex flex-col items-center transition-all"
      }
    >
      <h1 className="notificationsTitle">Notifications</h1>
      <div className="flex flex-col w-full items-center">
        {notifications.map((n, idx) => {
          return <NotificationItem key={idx} notification={n} />;
        })}
      </div>
      <div
        className={
          "h-20 backgroundOrangeShadow rotate-180 w-full absolute " + bottom
        }
      ></div>
    </div>
  );
};
