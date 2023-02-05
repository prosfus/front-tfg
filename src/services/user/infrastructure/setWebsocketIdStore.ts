import { setWebsocketId } from "../../../store/slices/auth/userSlice";
import store from "../../../store/store";

export const setWebsocketIdStore = (wID: string) => {
  store.dispatch(setWebsocketId(wID));
};
