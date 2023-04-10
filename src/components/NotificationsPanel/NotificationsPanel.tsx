import { motion, useMotionValue } from "framer-motion";
import { getNotificationsDomain } from "../../services/calls/domain/getNotificationsDomain";
import { PhoneSvg } from "../../assets/phoneSvg";

export const NotificationsPanel = () => {
  const notifications = getNotificationsDomain(true);
  const x = useMotionValue(0);

  return (
    <div className="w-[1500px] z-auto flex flex-row flex-wrap gap-[100px] overflow-y-auto">
      <div className="z-0 h-44 w-[300px] bg-primary-dark/40 rounded-lg backdrop-blur-md flex flex-col items-center justify-center gap-5">
        <label className="text-4xl text-white">Pau Rostoll</label>

        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: 0 }}
          className="rounded-full bg-primary-dark p-3"
          onDragStart={(event, info) => console.log(info.point.x, info.point.y)}
          onClick={() => {
            console.log("13123huio");
          }}
        >
          hloa
        </motion.div>
      </div>
    </div>
  );
};
