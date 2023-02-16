import Peer from "peerjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AppLayout } from "../components/Layout/Layout";
import { NotificationsPanel } from "../components/NotificationsPanel";
import { OnlineUsersList } from "../components/OnlineUsers";
import { OnlineUserCard } from "../components/OnlineUsers/OnlineUserCard";
import { initPeer } from "../services/peer/initPeer";
import { getIsLoggedDomain } from "../services/user/domain/getIsLoggedDomain";
import { getUserDomain } from "../services/user/domain/getUserDomain";
import { getWebsocketIdDomain } from "../services/user/domain/getWebsocketIdDomain";
import { requestMediaDevices } from "../services/webrtc/requestMediaDevices";
import { initWebsocket } from "../services/websocket/initWebsocket";

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const websocketId = getWebsocketIdDomain(true);
  const [peer, setPeer] = useState<Peer>();
  const [text, setText] = useState("");
  const user = getUserDomain(true);

  useEffect(() => {
    const isLogged = getIsLoggedDomain(false);
    if (!isLogged) {
      navigate("/");
      return;
    }
    requestMediaDevices();
    if (!websocketId) {
      initWebsocket();
    } else {
      setPeer(initPeer(websocketId));
    }
  }, [websocketId]);

  return (
    <AppLayout>
      <div className="h-screen w-screen flex flex-col items-center justify-start">
        <OnlineUsersList />
        <NotificationsPanel />
      </div>
    </AppLayout>
  );
};
