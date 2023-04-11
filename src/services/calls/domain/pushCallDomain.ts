import { User } from "../../../models/user";
import { getCallsStore } from "../infrastructure/getCallsStore";
import { setCallsStore } from "../infrastructure/setCallsStore";

export const pushCall = (user: User, stream: MediaStream) => {
  const calls = getCallsStore(false);
  setCallsStore([...calls, { user, stream }]);
};
