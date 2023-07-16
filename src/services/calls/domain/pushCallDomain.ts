import { getCallsStore } from "../infrastructure/getCallsStore";
import { setCallsStore } from "../infrastructure/setCallsStore";
import { Call } from "../../../models/calls";

export const pushCall = (call: Call | null) => {
  setCallsStore(call);
};
