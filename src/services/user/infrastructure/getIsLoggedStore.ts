import { useAppSelector } from "../../../store/hooks";
import store, { RootState } from "../../../store/store";

export const getIsLoggedStore = (shouldUseHook: boolean) => {
  const isLogged = shouldUseHook
    ? useAppSelector((state: RootState) => state.user.isLogged)
    : store.getState().user.isLogged;
  return isLogged;
};
