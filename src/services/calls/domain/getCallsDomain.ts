import { getCallsStore } from "../infrastructure/getCallsStore";

export const getCallDomain = (shouldUseHook: boolean) => {
  return getCallsStore(shouldUseHook);
};
