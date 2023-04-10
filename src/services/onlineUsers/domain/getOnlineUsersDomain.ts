import { getWebsocketIdDomain } from "../../user/domain/getWebsocketIdDomain";
import { getOnlineUsersStore } from "../infrastructure/getOnlineUsersStore";
/** DOMAIN FUNCTION
 *
 * Gets websocket id from the store
 * @param shouldUseHook - whether to use the hook or not
 */

export const getOnlineUsersDomain = (
  shouldUseHook: boolean,
  includeMe?: boolean
) => {
  const websocketId = getWebsocketIdDomain(false);
  return getOnlineUsersStore(shouldUseHook).filter((u) => {
    if (includeMe) return true;
    return u.id !== websocketId;
  });
};
