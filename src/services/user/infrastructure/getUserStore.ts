import { useAppSelector } from "../../../store/hooks";
import store, { RootState } from "../../../store/store";

export const getUserStore = (shouldUseHook: boolean) => {
  const user = shouldUseHook
    ? useAppSelector((state: RootState) => state.user.user)
    : store.getState().user.user;
  return user;
};
