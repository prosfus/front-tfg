import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

/** Login with google
 *
 *  Shows a google popup
 *  @returns {Promise<UserCredential>}
 */

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider);

  return result;
};
