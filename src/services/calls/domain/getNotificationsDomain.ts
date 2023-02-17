import { getNotificationsStore } from "../infrastructure/getNotificationsStore";

export const getNotificationsDomain = (shouldUseHook: boolean) => {
  return getNotificationsStore(shouldUseHook);
};
