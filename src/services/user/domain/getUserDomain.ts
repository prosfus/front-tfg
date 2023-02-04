import { getUserStore } from "../infrastructure/getUserStore";

export const getUserDomain = (shouldUseHook: boolean) => {
  return getUserStore(shouldUseHook);
};
