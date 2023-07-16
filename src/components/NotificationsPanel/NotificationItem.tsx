import { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Notification } from "../../models/calls";
import { PhoneSvg } from "../../assets/phoneSvg";
import { getCallDomain } from "../../services/calls/domain/getCallsDomain";
import { getNotificationsDomain } from "../../services/calls/domain/getNotificationsDomain";
import { acceptCall } from "../../services/websocket/infrastructure/socket";

interface Props {
  notification: Notification;
}

const containerVariants = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const circleVariants = {
  start: {
    strokeDasharray: "0 100",
    opacity: 1,
  },
  end: {
    strokeDasharray: "100 0",
    opacity: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const NotificationItem: React.FC<Props> = ({ notification }) => {
  const x = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const [scope2, animOpacity] = useAnimate();
  const [isAccepted, setIsAccepted] = useState(false);
  const calls = getCallDomain(true);

  const callAcceptedAnimations = () => {
    animate(
      scope.current,
      {
        height: "100vh",
        width: "120vw",
        position: "fixed",
        x: 0,
        y: 0,
        transform: "translate(-2%, -40%)",
      },
      { duration: 1, ease: "easeInOut" }
    ).then(() => {
      animate(
        scope.current,
        {
          opacity: 0,
        },
        { duration: 1 }
      );
    });
    animOpacity(
      scope2.current,
      {
        opacity: 0,
      },
      { duration: 0.5 }
    );
  };

  const handleAction = (notification: Notification) => {
    if (x.get() < -50) {
      console.log("reject");
    } else if (x.get() > 50) {
      acceptCall(notification);
      callAcceptedAnimations();
      setIsAccepted(true);
    }
  };

  const background = useTransform(
    x,
    [-75, 0, 75],
    ["#DE4242", "#9333EA", "#53C540"]
  );

  useEffect(() => {
    if (calls && isAccepted) {
      const video = document.getElementById("remoteVideo") as HTMLVideoElement;
      if (video) {
        //video.srcObject = calls[0].stream;
      }
    }
    if (calls) {
      callAcceptedAnimations();
    }
  }, [calls, isAccepted]);

  return (
    <div
      ref={scope}
      className="z-0 h-44 w-[300px] bg-primary-dark/40 rounded-lg backdrop-blur-md flex flex-col items-center justify-center gap-5"
    >
      <div
        ref={scope2}
        className="flex flex-col h-full items-center justify-center gap-5"
      >
        <div className="flex flex-col items-center">
          <label className="font-thin text-lg text-white">Calling:</label>
          <label className=" font-bold text-2xl text-white">
            {notification.user.name}
          </label>
        </div>

        {notification.orientation === "outgoing" && (
          <>
            <motion.svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              variants={containerVariants}
              animate="end"
              initial="start"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="5"
                stroke="currentColor"
                variants={circleVariants}
              />
            </motion.svg>
          </>
        )}
        {notification.orientation === "incoming" && (
          <>
            <motion.div
              drag="x"
              style={{
                x,
                background,
              }}
              dragConstraints={{ left: 0, right: 0 }}
              className="rounded-full w-12 h-12 flex items-center justify-center bg-primary-dark p-3"
              onDragEnd={() => handleAction(notification)}
            >
              <PhoneSvg />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};
