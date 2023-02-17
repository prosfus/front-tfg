import { useAppSelector } from "../../../store/hooks";
import store, { RootState } from "../../../store/store";

export const getNotificationsStore = (shouldUseHook: boolean) => {
  const notifications = shouldUseHook
    ? useAppSelector((state: RootState) => state.calls.notifications)
    : store.getState().calls.notifications;
  return notifications;
};
