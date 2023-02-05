import { User } from "../../../models/user";
import { setOnlineUsersStore } from "../infrastructure/setOnlineUsersStore";
/** DOMAIN FUNCTION
 *
 * Sets the online users in the store
 * @param users - the users to set
 */
export const setOnlineUsersDomain = (users: User[]) => {
  setOnlineUsersStore(users);
};
