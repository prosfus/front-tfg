import { MediaConnection } from "peerjs";
import { User } from "../../../models/user";
import { getCallsStore } from "../infrastructure/getCallsStore";
import { setCallsStore } from "../infrastructure/setCallsStore";

export const pushCall = (
  user: User,
  stream: MediaStream,
  call: MediaConnection
) => {
  const calls = getCallsStore(false);
  if (calls.find((c) => c.call.connectionId === call.connectionId)) {
    return;
  }
  setCallsStore([...calls, { user, stream, call }]);
};
