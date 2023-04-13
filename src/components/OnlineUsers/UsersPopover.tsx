import { motion } from "framer-motion";
import { useState } from "react";
import { getOnlineUsersDomain } from "../../services/onlineUsers/domain/getOnlineUsersDomain";
import { PopoverUserItem } from "./PopoverUserItem";
import { User } from "../../models/user";

export const UsersPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onlineUsers = getOnlineUsersDomain(true);
  const user: User = {
    id: "1",
    name: "test",
  };

  const variants = {
    open: {
      height: ["0px", "370px"],
      width: ["0px", "370px"],
      scale: [0, 1],
      opacity: [0, 0.1, 1],
    },
    closed: {
      height: ["370px", "0px"],
      width: ["370px", "0px"],
      scale: [1, 0],
      opacity: [1, 0],
    },
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="bg-white text-2xl p-3 px-6 text-black font-bold rounded-md shadow-xl flex flex-row items-center justify-around gap-3 transition duration-400 hover:duration-400 hover:bg-white/80"
      >
        + New call
      </button>
      <div>
        {
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={{ originX: 0, originY: 0 }}
            className="absolute bg-white rounded-lg shadow-2xl mt-5 flex flex-col"
          >
            <label className="p-5 text-2xl font-bold">Online users:</label>
            <div className="h-full">
              {onlineUsers.map((user) => {
                return (
                  <PopoverUserItem
                    key={user.id}
                    user={user}
                    setIsOpen={setIsOpen}
                  />
                );
              })}
            </div>
          </motion.div>
        }
      </div>
    </div>
  );
};
