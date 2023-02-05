import { UserCredential } from "firebase/auth";
import { User } from "../../../models/user";
import { setIsLoggedStore } from "../infrastructure/setIsLoggedStore";
import { setUserStore } from "../infrastructure/setUserStore";
/** DOMAIN FUNCTION
 *
 * Sets the user after getting the response from firebase
 * @param response - firebase response
 */

export const loginUser = (response: UserCredential) => {
  const displayName = response.user?.displayName || response.user?.email;

  if (displayName) {
    const user: User = {
      name: displayName,
      id: response.user.uid,
    };
    setIsLoggedStore(true);
    setUserStore(user);
  }
};
