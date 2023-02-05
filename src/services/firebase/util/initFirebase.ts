import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";

/** Start firebase app
 *
 */

export const initFirebase = () => {
  const config = firebaseConfig;
  const app = initializeApp(config);
};
