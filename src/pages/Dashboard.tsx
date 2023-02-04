import { AppLayout } from "../components/Layout/Layout";

export const DashboardPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="h-screen w-screen flex items-center justify-center">
        <h1 className="text-white font-bold text-[96px]">Dashboard</h1>
      </div>
    </AppLayout>
  );
};
