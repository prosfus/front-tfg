import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirebaseAuth } from "./initFirebase";

/** Login with google
 *
 *  Shows a google popup
 *  @returns {Promise<UserCredential>}
 */

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getFirebaseAuth();
  const result = await signInWithPopup(auth, provider);

  return result;
};
