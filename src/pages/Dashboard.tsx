import Peer from "peerjs";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AppLayout } from "../components/Layout/Layout";
import { NotificationsPanel } from "../components/NotificationsPanel";
import { OnlineUsersList } from "../components/OnlineUsers";
import { OnlineUserCard } from "../components/OnlineUsers/OnlineUserCard";
import { initPeer } from "../services/peer/initPeer";
import { getIsLoggedDomain } from "../services/user/domain/getIsLoggedDomain";
import { getUserDomain } from "../services/user/domain/getUserDomain";
import { getWebsocketIdDomain } from "../services/user/domain/getWebsocketIdDomain";
import {
  getStream,
  requestMediaDevices,
} from "../services/webrtc/requestMediaDevices";
import { initWebsocket } from "../services/websocket/initWebsocket";

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
        stream.getAudioTracks()[0].enabled = false;
        clientVideoRef.current.srcObject = stream;
      }
    });
    if (!websocketId) {
      initWebsocket();
    } else {
      setPeer(initPeer(websocketId));
    }
  }, [websocketId]);

  return (
    <AppLayout>
      <div className="max-h-screen w-screen flex flex-col items-center justify-start">
        <OnlineUsersList />
        <NotificationsPanel />
        <div className="w-screen">
          <video ref={clientVideoRef} autoPlay />
          <video id="remoteVideo" ref={remoteVideoRef} autoPlay />
        </div>
      </div>
    </AppLayout>
  );
};
