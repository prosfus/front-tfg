import { useEffect, useMemo } from "react";
import { getCallDomain } from "../../services/calls/domain/getCallsDomain";
import { motion } from "framer-motion";
import { PhoneSvg } from "../../assets/phoneSvg";
import { callUser, getPeer } from "../../services/peer/initPeer";
import { getWebsocketIdDomain } from "../../services/user/domain/getWebsocketIdDomain";
import { getStream } from "../../services/webrtc/domain/requestMediaDevices";
import { useCustomEventListener } from "react-custom-events";
import { pushCall } from "../../services/calls/domain/pushCallDomain";
import { Video } from "./Video";
import { UsersPopover } from "../OnlineUsers/UsersPopover";
import { hangupCall } from "../../services/websocket/infrastructure/socket";

export const Videocall = () => {
  const call = getCallDomain(true);
  const peer = useMemo(() => getPeer(), []);
  const websocketId = getWebsocketIdDomain(true);

  useCustomEventListener(
    "streamReceived",
    (data: { stream: MediaStream; user: string }) => {
      const c = getCallDomain(false);
      if (!c) return;

      let updatedCall = { ...c };

      updatedCall.streams = [
        ...c.streams.filter((s) => s.user !== data.user),
        {
          stream: data.stream,
          user: data.user,
        },
      ];

      pushCall(updatedCall);
    }
  );

  useEffect(() => {}, [call?.streams]);

  useEffect(() => {
    if (call && websocketId) {
      const stream = getStream();
      call.userIds.forEach((userId) => {
        if (userId === websocketId) return;
        if (call.streams?.some((s) => s.user === userId)) return;

        //Llamar a los usuarios que tengan un id menor al mio.
        // Esto es para evitar que se hagan llamadas duplicadas.
        if (websocketId < userId) {
          console.log("calling user");

          callUser(userId, stream);
        }
      });
    }
  }, [call]);

  console.log(call);

  if (!call) {
    return <></>;
  }

  return (
    <motion.div
      animate={{ opacity: [0, 0, 1] }}
      transition={{ duration: 2, times: [0, 0.5, 1] }}
      className="opacity-0 absolute top-0 left-0 w-screen h-screen bg-primary-dark/40 rounded-lg backdrop-blur-md text-white flex flex-col items-center justify-center gap-5"
    >
      <div className="min-h-[500px] flex flex-row">
        {call?.streams.map((s, index) => {
          return <Video key={index} stream={s} />;
        })}
      </div>
      <div className="flex flex-row gap-10">
        <UsersPopover addUser />
        <div
          className="bg-red-500 cursor-pointer flex items-center justify-center h-14 w-14 rounded-full"
          onClick={() => {
            //hangupCall(calls[0]);
            hangupCall();
          }}
        >
          <PhoneSvg />
        </div>
      </div>
    </motion.div>
  );
};
