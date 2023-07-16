import { Call } from "../../../models/calls";
import { getCallsStore } from "../infrastructure/getCallsStore";
import { setCallsStore } from "../infrastructure/setCallsStore";

export const removeCallDomain = () => {
  setCallsStore(null);
};
