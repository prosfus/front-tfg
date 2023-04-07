import { AppLayout } from "../components/Layout/Layout";
import Titul from "../assets/Titul_gran.png";
import { firebaseConfig } from "../services/firebase/config";
import { loginWithGoogle } from "../services/firebase/util/loginWithGoogle";
import { useEffect, useState } from "react";
import { initFirebase } from "../services/firebase/util/initFirebase";
import { loginUser } from "../services/user/domain/loginUser";
import { getIsLoggedStore } from "../services/user/infrastructure/getIsLoggedStore";
import { Navigate } from "react-router";

export const LoginPage: React.FC = () => {
  const isLogged = getIsLoggedStore(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const animation = !isLoaded
    ? "w-screen overflow-hidden flex flex-col gap-10 p-10 pb-0"
    : "w-screen h-screen overflow-y-auto flex flex-col gap-10 p-10 pb-10";

  useEffect(() => {
    initFirebase();
    let timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function handleLogin() {
    loginWithGoogle()
      .then((response) => {
        console.log("13");

        loginUser(response);
        console.log("14");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (isLogged) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <AppLayout>
      <div className={animation}>
        <img
          className="w-[900px] h-[200px] animate-titleAnimation"
          src={Titul}
          draggable="false"
        />
        <div className="bg-primary-dark/60 rounded-lg w-[1500px] min-h-[1200px] animate-boxAnimation backdrop-blur-md">
          <div className="flex flex-col items-start gap-10 p-10">
            <div className="text-white font-medium text-[50px] flex flex-row flex-wrap max-w-[700px]">
              <div className="text-[20px] mt-5 mr-5 font-medium w-min h-min px-2 rounded-2xl border-2">
                TFG
              </div>
              <div>Videocalls web app</div>
              <div>made with React</div>
            </div>
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
        </div>
      </div>
    </AppLayout>
  );
};
