import { AppLayout } from "../components/Layout/Layout";
import { GoogleLogo } from "../assets/googleLogo";
import { firebaseConfig } from "../services/firebase/config";
import { loginWithGoogle } from "../services/firebase/infrastructure/loginWithGoogle";
import { useEffect } from "react";
import { initFirebase } from "../services/firebase/infrastructure/initFirebase";
import { loginUser } from "../services/user/domain/loginUser";
import { getIsLoggedStore } from "../services/user/infrastructure/getIsLoggedStore";
import { Navigate } from "react-router";

export const LoginPage: React.FC = () => {
  const isLogged = getIsLoggedStore(true);

  useEffect(() => {
    initFirebase();
  }, []);

  function handleLogin() {
    loginWithGoogle()
      .then((response) => {
        loginUser(response);
      })
      .catch((error) => {
        console.log("Popover closed");
      });
  }

  if (isLogged) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <AppLayout>
      <div className=" h-screen w-screen flex flex-col items-center justify-center gap-10">
        <h1 className="text-white font-semibold text-[89px] text-center">
          Videocalls web app <br /> with WebRTC
        </h1>
        <div className="flex flex-row gap-10">
          <button
            onClick={handleLogin}
            className="bg-white text-2xl p-3 px-6 text-black font-bold rounded-md shadow-xl flex flex-row items-center justify-around gap-3 transition duration-400 hover:duration-400 hover:bg-white/80"
          >
            Log in
          </button>
          <button
            onClick={handleLogin}
            className="flex bg-black shadow-md text-white text-2xl p-3 px-6 font-bold rounded-md flex-row items-center justify-around gap-3 transition duration-400 hover:duration-400 hover:bg-black/40"
          >
            View docs
          </button>
        </div>
      </div>
    </AppLayout>
  );
};
