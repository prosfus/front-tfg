import { useEffect, useState } from "react";
import { acceptCall } from "../../services/peer/initPeer";
import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Notification } from "../../models/calls";
import { PhoneSvg } from "../../assets/phoneSvg";
import { getCallsDomain } from "../../services/calls/domain/getCallsDomain";

interface Props {
  notification: Notification;
}

export const NotificationItem: React.FC<Props> = ({ notification }) => {
  const x = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const [isAccepted, setIsAccepted] = useState(false);
  const calls = getCallsDomain(true);

  const handleAction = (notification: Notification) => {
    if (x.get() < -50) {
      console.log("reject");
    } else if (x.get() > 50) {
      acceptCall(notification.call);
      animate(
        scope.current,
        {
          height: "90vh",
          width: "95vw",
          position: "fixed",
          x: 0,
          y: 0,
          transform: "translate(0%, -43%)",
        },
        { duration: 1, ease: "easeInOut" }
      );
      setIsAccepted(true);
    }
  };

  const background = useTransform(
    x,
    [-75, 0, 75],
    ["#DE4242", "#9333EA", "#53C540"]
  );

  useEffect(() => {
    if (calls.length && isAccepted) {
      const video = document.getElementById("remoteVideo") as HTMLVideoElement;
      if (video) {
        video.srcObject = calls[0].stream;
        console.log("SRC OBJECT SETTED");
      }
    }
  }, [calls, isAccepted]);

  return (
    <div
      ref={scope}
      className="z-0 h-44 w-[300px] bg-primary-dark/40 rounded-lg backdrop-blur-md flex flex-col items-center justify-center gap-5"
    >
      {isAccepted && (
        <div className="bg-red-400 h-600 w-600">
          <video id="remoteVideo" autoPlay height={500} width={500}></video>
        </div>
      )}
      {!isAccepted && (
        <>
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
        </>
      )}
    </div>
  );
};
