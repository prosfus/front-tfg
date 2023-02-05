import { useAppSelector } from "../../../store/hooks";
import store, { RootState } from "../../../store/store";

export const getWebsocketIdStore = (shouldUseHook: boolean) => {
  const websocketId = shouldUseHook
    ? useAppSelector((state: RootState) => state.user.websocketId)
    : store.getState().user.websocketId;
  return websocketId;
};
