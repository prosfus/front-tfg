import { useEffect } from "react";
import { getCallsDomain } from "../../services/calls/domain/getCallsDomain";
import { motion } from "framer-motion";
import { hangupCall } from "../../services/peer/initPeer";

export const Videocall = () => {
  const calls = getCallsDomain(true);
  useEffect(() => {
    if (calls.length) {
      const video = document.getElementById("remoteVideo") as HTMLVideoElement;
      if (video) {
        video.srcObject = calls[0].stream;
      }
    }
  }, [calls]);

  if (calls.length === 0) {
    return <></>;
  }
  return (
    <motion.div
      animate={{ opacity: [0, 0, 1] }}
      transition={{ duration: 2, times: [0, 0.5, 1] }}
      className="opacity-0 absolute top-0 left-0 w-screen h-screen bg-primary-dark/40 rounded-lg backdrop-blur-md text-white flex items-center justify-center"
    >
      <video id="remoteVideo" autoPlay height={500} width={500}></video>
      <div
        className="bg-red-400 rounded-md"
        onClick={() => {
          hangupCall(calls[0]);
        }}
      >
        HANGUP
      </div>
    </motion.div>
  );
};
