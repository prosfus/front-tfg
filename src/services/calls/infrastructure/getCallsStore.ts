import { useAppSelector } from "../../../store/hooks";
import store, { RootState } from "../../../store/store";

export const getCallsStore = (shouldUseHook: boolean) => {
  const calls = shouldUseHook
    ? useAppSelector((state: RootState) => state.calls.calls)
    : store.getState().calls.calls;
  return calls;
};
