import { useEffect } from "react";
import { getCallsDomain } from "../../services/calls/domain/getCallsDomain";
import { motion } from "framer-motion";
import { hangupCall } from "../../services/peer/initPeer";
import { PhoneSvg } from "../../assets/phoneSvg";

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
      className="opacity-0 absolute top-0 left-0 w-screen h-screen bg-primary-dark/40 rounded-lg backdrop-blur-md text-white flex flex-col items-center justify-center gap-5"
    >
      <div className="relative">
        <div className="p-2 absolute top-2 left-2 bg-primary-dark/50 rounded-md">
          <label className=" text-2xl">{calls[0].user.name}</label>
        </div>
        <video
          id="remoteVideo"
          className="rounded-lg h-[600px] border border-primary-dark/60"
          autoPlay
          height={800}
        ></video>
      </div>
      <div
        className="bg-red-600 cursor-pointer p-3 rounded-full"
        onClick={() => {
          hangupCall(calls[0]);
        }}
      >
        <PhoneSvg />
      </div>
    </motion.div>
  );
};
