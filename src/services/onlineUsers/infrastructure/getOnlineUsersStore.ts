import { useAppSelector } from "../../../store/hooks";
import store, { RootState } from "../../../store/store";

export const getOnlineUsersStore = (shouldUseHook: boolean) => {
  const onlineUsers = shouldUseHook
    ? useAppSelector((state: RootState) => state.onlineUsers.onlineUsers)
    : store.getState().onlineUsers.onlineUsers;
  return onlineUsers;
};
