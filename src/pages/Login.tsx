import { AppLayout } from "../components/Layout/Layout";
import { GoogleLogo } from "../assets/googleLogo";

export const LoginPage: React.FC = () => {
  return (
    <AppLayout>
      <div className=" h-screen w-screen flex items-center justify-center">
        <div className="flex flex-row items-center justify-around w-2/3">
          <h1 className="text-white font-bold text-[96px]">
            WebRTC <br />
            Videcalls
          </h1>

          <button className="bg-secondary-nose flex flex-row items-center justify-around gap-10 border shadow-purple border-secondary-gray text-[48px] text-white px-28 py-10 rounded-lg">
            <GoogleLogo /> Log in
          </button>
        </div>
      </div>
    </AppLayout>
  );
};
