import { AppLayout } from "../components/Layout/Layout";
import { GoogleLogo } from "../assets/googleLogo";
import { firebaseConfig } from "../services/firebase/config";
import { loginWithGoogle } from "../services/firebase/util/loginWithGoogle";
import { useEffect } from "react";
import { initFirebase } from "../services/firebase/util/initFirebase";
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
      <div className=" h-screen w-screen flex items-center justify-center">
        <div className="flex flex-row max-lg:flex-col items-center justify-center gap-52 max-xl:gap-32 w-full ">
          <h1 className="text-white font-bold text-[96px]">
            WebRTC <br />
            Videocalls
          </h1>

          <button
            onClick={handleLogin}
            className="bg-secondary-nose flex flex-row items-center justify-around gap-10 border shadow-purple transition duration-200 hover:duration-200 hover:shadow-orange border-secondary-gray text-[48px] text-white px-28 py-10 rounded-lg"
          >
            <GoogleLogo /> Log in
          </button>
        </div>
      </div>
    </AppLayout>
  );
};
