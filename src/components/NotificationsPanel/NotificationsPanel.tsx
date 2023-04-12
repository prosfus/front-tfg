import {
  motion,
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { getNotificationsDomain } from "../../services/calls/domain/getNotificationsDomain";
import { PhoneSvg } from "../../assets/phoneSvg";
import { useEffect, useRef, useState } from "react";
import { acceptCall } from "../../services/peer/initPeer";
import { Notification } from "../../models/calls";
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
