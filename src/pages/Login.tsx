import { AppLayout } from "../components/Layout/Layout";
import { GoogleLogo } from "../assets/googleLogo";
import { firebaseConfig } from "../services/firebase/config";

export const LoginPage: React.FC = () => {
  console.log(firebaseConfig);

  return (
    <AppLayout>
      <div className=" h-screen w-screen flex items-center justify-center">
        <div className="flex flex-row max-lg:flex-col items-center justify-center gap-52 max-xl:gap-32 w-full ">
          <h1 className="text-white font-bold text-[96px]">
            WebRTC <br />
            Videcalls
          </h1>

          <button className="bg-secondary-nose flex flex-row items-center justify-around gap-10 border shadow-purple transition duration-200 hover:duration-200 hover:shadow-orange border-secondary-gray text-[48px] text-white px-28 py-10 rounded-lg">
            <GoogleLogo /> Log in
          </button>
        </div>
      </div>
    </AppLayout>
  );
};
