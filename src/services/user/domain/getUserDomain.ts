import { getUserStore } from "../infrastructure/getUserStore";

/** DOMAIN FUNCTION
 *
 * Gets the user from the store
 * @param shouldUseHook - whether to use the hook or not
 */

export const getUserDomain = (shouldUseHook: boolean) => {
  return getUserStore(shouldUseHook);
};
