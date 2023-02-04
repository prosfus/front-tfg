import { useEffect } from "react";
import { AppLayout } from "../components/Layout/Layout";
import { initWebsocket } from "../services/websocket/initWebsocket";

export const DashboardPage: React.FC = () => {
  useEffect(() => {
    initWebsocket();
  }, []);

  return (
    <AppLayout>
      <div className="h-screen w-screen flex items-center justify-center">
        <h1 className="text-white font-bold text-[96px]">Dashboard</h1>
      </div>
    </AppLayout>
  );
};
