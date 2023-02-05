import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AppLayout } from "../components/Layout/Layout";
import { OnlineUsersList } from "../components/OnlineUsers";
import { OnlineUserCard } from "../components/OnlineUsers/OnlineUserCard";
import { getIsLoggedDomain } from "../services/user/domain/getIsLoggedDomain";
import { initWebsocket } from "../services/websocket/initWebsocket";

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = getIsLoggedDomain(false);
    if (!isLogged) {
      navigate("/");
    } else initWebsocket();
  }, []);

  return (
    <AppLayout>
      <div className="h-screen w-screen flex items-start justify-center">
        <OnlineUsersList />
      </div>
    </AppLayout>
  );
};
