import { motion } from "framer-motion";
import { useState } from "react";
import { User } from "../../models/user";
import {
  hasStream,
  requestMediaDevices,
} from "../../services/webrtc/domain/requestMediaDevices";
import { setNotificationsDomain } from "../../services/calls/domain/setNotificationsStore";
import {
  addUserToCall,
  startCall,
} from "../../services/websocket/infrastructure/socket";

interface Props {
  user: User;
  setIsOpen: (isOpen: boolean) => void;
  addUser: boolean;
}
export const PopoverUserItem = ({ user, setIsOpen, addUser }: Props) => {
  const [hover, setHover] = useState(false);

  const variants = {
    open: {
      left: 0,
      transform: "scaleX(1)",
      opacity: 1,
    },
    closed: {
      transform: "scaleX(0)",
      opacity: 0,
    },
  };

  const handleClick = () => {
    if (addUser) {
      addUserToCall(user.id);
      return;
    }
    if (hasStream()) {
      startCall(user.id);
      setIsOpen(false);
    } else {
      requestMediaDevices().then((stream) => {
        if (stream) startCall(user.id);
      });
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      className="h-14 w-full relative flex flex-row gap-3 items-center cursor-pointer"
    >
      <motion.div
        animate={hover ? "open" : "closed"}
        variants={variants}
        className="absolute bg-secondary-main min-w-full left-0 h-14 top-0 cursor-pointer rounded-l-lg "
        transition={{
          duration: hover ? 0.7 : 0.3,
          ease: "easeOut",
        }}
        style={{ originX: 1, originY: 0.5 }}
      ></motion.div>
      <div className={"ml-5 h-3 w-3 z-10 bg-primary-light rounded-full"}></div>
      <label className="text-xl font-bold z-10 cursor-pointer">
        {user.name}
      </label>
    </motion.div>
  );
};
