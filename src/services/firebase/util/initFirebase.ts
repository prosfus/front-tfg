import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";

export const initFirebase = () => {
  const config = firebaseConfig;
  const app = initializeApp(config);
};
