import Peer from "peerjs";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AppLayout } from "../components/Layout/Layout";
import Titul from "../assets/Titul_gran.png";
import { initPeer } from "../services/peer/initPeer";
import { getIsLoggedDomain } from "../services/user/domain/getIsLoggedDomain";
import { getUserDomain } from "../services/user/domain/getUserDomain";
import { getWebsocketIdDomain } from "../services/user/domain/getWebsocketIdDomain";
import {
  getStream,
  requestMediaDevices,
} from "../services/webrtc/domain/requestMediaDevices";
import { initWebsocket } from "../services/websocket/infrastructure/initWebsocket";
import { motion } from "framer-motion";
import { WebRTC_title } from "../components/Title";
import { UsersPopover } from "../components/OnlineUsers/UsersPopover";

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const websocketId = getWebsocketIdDomain(true);
  const [peer, setPeer] = useState<Peer>();
  const [text, setText] = useState("");
  const user = getUserDomain(true);
  const stream = getStream();
  const clientVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isLogged = getIsLoggedDomain(false);
    if (!isLogged) {
      navigate("/");
      return;
    }
    requestMediaDevices().then((stream) => {
      if (clientVideoRef?.current && stream) {
        clientVideoRef.current.srcObject = stream;
        // I dont want to hear myself
        clientVideoRef.current.muted = true;
      }
    });
    if (!websocketId) {
      initWebsocket();
      requestMediaDevices();
    } else {
      setPeer(initPeer(websocketId));
    }
  }, [websocketId]);

  return (
    <AppLayout>
      <div
        className={
          "w-screen h-screen overflow-hidden flex flex-col justify-start gap-10 p-10"
        }
      >
        <WebRTC_title exitAnimation />
        <div className="bg-primary-dark/60 rounded-lg w-[1500px] backdrop-blur-md">
          <div className="flex flex-col items-start gap-10 p-10">
            <div className="text-white font-medium text-[50px] flex flex-row flex-wrap max-w-[700px]">
              <div className="text-[20px] mt-5 mr-5 font-medium w-min h-min px-2 rounded-2xl border-2">
                TFG
              </div>
              <div>Start a new videocall</div>
            </div>
            <div className="flex flex-row gap-10">
              <UsersPopover />
              <button className="flex bg-black shadow-md text-white text-2xl p-3 px-6 font-bold rounded-md flex-row items-center justify-around gap-3 transition duration-400 hover:duration-400 hover:bg-black/40">
                View docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
