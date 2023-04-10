import { AnimationControls, motion } from "framer-motion";
import Titul from "../assets/Titul_gran.png";

interface Props {
  exitAnimation?: boolean;
}

export const WebRTC_title: React.FC<Props> = ({ exitAnimation }) => {
  const animation = !!exitAnimation
    ? {
        width: ["900px", "900px"],
        height: ["200px", "0px"],
        opacity: [1, 0],
      }
    : {
        width: ["900px", "900px"],
        height: ["1000px", "200px"],
        opacity: [0, 0.1, 1],
      };

  return (
    <motion.img
      animate={animation}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      src={Titul}
      draggable="false"
    />
  );
};
