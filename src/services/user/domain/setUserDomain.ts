import { User } from "../../../models/user";
import { setUserStore } from "../infrastructure/setUserStore";
/** DOMAIN FUNCTION
 *
 * Sets the user in the store
 * @param user - the user to set
 */
export const setUserDomain = (user: User) => {
  setUserStore(user);
};
