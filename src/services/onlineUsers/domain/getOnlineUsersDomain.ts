import { getOnlineUsersStore } from "../infrastructure/getOnlineUsersStore";
/** DOMAIN FUNCTION
 *
 * Gets websocket id from the store
 * @param shouldUseHook - whether to use the hook or not
 */

export const getOnlineUsersDomain = (shouldUseHook: boolean) => {
  return getOnlineUsersStore(shouldUseHook);
};
