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

export const NotificationsPanel = () => {
  const notifications = getNotificationsDomain(true);
  const x = useMotionValue(0);
  const [scope, animate] = useAnimate();

  const background = useTransform(
    x,
    [-75, 0, 75],
    ["#DE4242", "#9333EA", "#53C540"]
  );

  const handleAction = (notification: Notification) => {
    if (x.get() < -50) {
      console.log("reject");
    } else if (x.get() > 50) {
      acceptCall(notification.call);
      animate(
        scope.current,
        {
          height: "80vh",
          width: "95vw",
          position: "absolute",
        },
        { duration: 1, ease: "easeInOut" }
      );
    }
  };

  return (
    <div className="flex flex-row flex-wrap gap-[100px] overflow-y-auto">
      {notifications.map((notification, key) => {
        return (
          <div
            key={key}
            ref={scope}
            className="z-0 h-44 w-[300px] bg-primary-dark/40 rounded-lg backdrop-blur-md flex flex-col items-center justify-center gap-5"
          >
            <label className="text-4xl text-white">
              {notification.user.name}
            </label>

            <motion.div
              drag="x"
              style={{
                x,
                background,
              }}
              dragConstraints={{ left: 0, right: 0 }}
              className="rounded-full bg-primary-dark p-3"
              onDragEnd={() => handleAction(notification)}
            >
              <PhoneSvg />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
