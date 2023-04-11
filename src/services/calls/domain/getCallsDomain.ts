import { getCallsStore } from "../infrastructure/getCallsStore";

export const getCallsDomain = (shouldUseHook: boolean) => {
  return getCallsStore(shouldUseHook);
};
