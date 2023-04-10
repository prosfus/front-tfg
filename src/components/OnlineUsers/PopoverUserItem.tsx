import { motion } from "framer-motion";
import { useState } from "react";
import { User } from "../../models/user";
import { CallFunctions } from "../../services/peer/initPeer";
import {
  hasStream,
  requestMediaDevices,
} from "../../services/webrtc/domain/requestMediaDevices";

interface Props {
  user: User;
}
export const PopoverUserItem = ({ user }: Props) => {
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
    if (hasStream()) {
      CallFunctions.startCall(user);
    } else {
      requestMediaDevices().then((stream) => {
        if (stream) CallFunctions.startCall(user);
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
