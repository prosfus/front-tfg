import { Call } from "../../../models/calls";
import { useAppSelector } from "../../../store/hooks";
import store, { RootState } from "../../../store/store";

export const getCallsStore = (shouldUseHook: boolean) => {
  const call = shouldUseHook
    ? useAppSelector((state: RootState) => state.calls.call)
    : store.getState().calls.call;
  return call as Call | null;
};
