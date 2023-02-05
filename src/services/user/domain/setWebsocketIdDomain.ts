import { setIsLoggedStore } from "../infrastructure/setIsLoggedStore";
import { setWebsocketIdStore } from "../infrastructure/setWebsocketIdStore";
/** DOMAIN FUNCTION
 *
 * Sets the websocket id in the store
 * @param websocketId - the websocket id to set
 */
export const setWebsocketIdDomain = (websocketId: string) => {
  setWebsocketIdStore(websocketId);
};
