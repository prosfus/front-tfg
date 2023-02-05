import { getIsLoggedStore } from "../infrastructure/getIsLoggedStore";
import { getWebsocketIdStore } from "../infrastructure/getWebsocketIdStore";

/** DOMAIN FUNCTION
 *
 * Gets websocket id from the store
 * @param shouldUseHook - whether to use the hook or not
 */

export const getWebsocketIdDomain = (shouldUseHook: boolean) => {
  return getWebsocketIdStore(shouldUseHook);
};
