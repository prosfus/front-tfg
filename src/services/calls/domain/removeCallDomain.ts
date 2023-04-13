import { Call } from "../../../models/calls";
import { getCallsStore } from "../infrastructure/getCallsStore";
import { setCallsStore } from "../infrastructure/setCallsStore";

export const removeCallDomain = (call: Call) => {
  const calls = getCallsStore(false);

  const newCalls = calls.filter(
    (c) => c.call.connectionId !== call.call.connectionId
  );
  setCallsStore(newCalls);
};
