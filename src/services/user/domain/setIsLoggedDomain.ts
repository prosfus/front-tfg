import { setIsLoggedStore } from "../infrastructure/setIsLoggedStore";
/** DOMAIN FUNCTION
 *
 * Sets the boolean value of isLogged in the store
 * @param isLogged - the boolean value to set
 */
export const setIsLoggedDomain = (isLogged: boolean) => {
  setIsLoggedStore(isLogged);
};
