import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { firebaseConfig } from "../config";

/** Start firebase app
 *
 */
let auth: Auth;

export const initFirebase = () => {
  const config = firebaseConfig;
  const app = initializeApp(config);
  auth = getAuth(app);
};

export const getFirebaseAuth = () => {
  return auth;
};
