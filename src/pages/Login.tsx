import { AppLayout } from "../components/Layout/Layout";
import Titul from "../assets/Titul_gran.png";
import { firebaseConfig } from "../services/firebase/config";
import { loginWithGoogle } from "../services/firebase/infrastructure/loginWithGoogle";
import { useEffect, useState } from "react";
import { initFirebase } from "../services/firebase/infrastructure/initFirebase";
import { loginUser } from "../services/user/domain/loginUser";
import { getIsLoggedStore } from "../services/user/infrastructure/getIsLoggedStore";
import { Navigate } from "react-router";
import { motion } from "framer-motion";
import { WebRTC_title } from "../components/Title";

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
        console.log(error);
      });
  }

  if (isLogged) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <AppLayout>
      <div
        className={
          "w-screen overflow-hidden flex flex-col justify-start gap-10 p-10"
        }
      >
        <WebRTC_title />
        <motion.div
          animate={{
            marginTop: ["1000px", "0px"],
            opacity: [0, 0.1, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 0.6, 1],
          }}
          className="bg-primary-dark/60 rounded-lg w-[1500px] backdrop-blur-md"
        >
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
        </motion.div>
      </div>
    </AppLayout>
  );
};
