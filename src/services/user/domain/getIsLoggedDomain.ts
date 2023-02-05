import { getIsLoggedStore } from "../infrastructure/getIsLoggedStore";

/** DOMAIN FUNCTION
 *
 * Gets if the user is logged from the store
 * @param shouldUseHook - whether to use the hook or not
 */

export const getIsLoggedDomain = (shouldUseHook: boolean) => {
  return getIsLoggedStore(shouldUseHook);
};
