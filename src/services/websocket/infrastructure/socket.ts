import { io } from "socket.io-client";
import { User } from "../../../models/user";
import { setOnlineUsersDomain } from "../../onlineUsers/domain/setOnlineUsersDomain";
import { getUserDomain } from "../../user/domain/getUserDomain";
import { setWebsocketIdDomain } from "../../user/domain/setWebsocketIdDomain";
import { Call, Notification } from "../../../models/calls";
import { pushCall } from "../../calls/domain/pushCallDomain";
import { pushNotification } from "../../calls/domain/pushNotification";
import { getWebsocketIdDomain } from "../../user/domain/getWebsocketIdDomain";
import { removeNotification } from "../../calls/domain/removeNotification";
import { getCallDomain } from "../../calls/domain/getCallsDomain";

export const socket = io(
  import.meta.env.VITE_WEBSOCKET_URL || "http://localhost:3000"
);

socket.on("connect", () => {
  console.log("Connected to websocket server");
});

// In this event we receive the websocket id from the server
socket.on("me", (websocketId: string) => {
  setWebsocketIdDomain(websocketId);
  console.log("My websocket id is: ", websocketId);
});

socket.on("connectedUsers", (onlineUsers: User[]) => {
  setOnlineUsersDomain(onlineUsers);
  console.log("Online users: ", onlineUsers);
});

socket.on("createCall", (newCall: Call) => {
  console.log("Event: createCall", newCall);
  newCall.streams = [];
  pushCall(newCall);
});

socket.on("callUpdate", (callUpdated: Call) => {
  console.log("Event: updateCall", callUpdated);

  const call = getCallDomain(false);
  pushCall({
    ...callUpdated,
    streams:
      call?.streams?.filter((s) => callUpdated.userIds.includes(s.user)) || [],
  });
});

socket.on(
  "callNotification",
  (data: { callId: string; caller: User; userToCall: User }) => {
    const websocketId = getWebsocketIdDomain(false);
    if (!websocketId) return;

    if (websocketId === data.userToCall.id) {
      pushNotification(data.caller, "incoming", data.callId);
    } else {
      pushNotification(data.userToCall, "outgoing", data.callId);
    }
  }
);

export const startCall = (userToCallId: string) => {
  const user = getUserDomain(false);
  const websocketId = getWebsocketIdDomain(false);
  if (!user) return;

  socket.emit("createCall", { creatorId: websocketId, userToCallId });
};

export const addUserToCall = (userToAddId: string) => {
  const websocketId = getWebsocketIdDomain(false);
  const call = getCallDomain(false);
  if (!websocketId || !call) return;

  socket.emit("callUser", {
    userToCallId: userToAddId,
    callerId: websocketId,
    callId: call.callId,
  });
};

export const acceptCall = (notification: Notification) => {
  socket.emit("answerCall", { callId: notification.callId });
  removeNotification(notification);
};

export const hangupCall = () => {
  const websocketId = getWebsocketIdDomain(false);
  const call = getCallDomain(false);
  if (!websocketId || !call) return;

  socket.emit("hangupCall", { callId: call.callId });
  pushCall(null);
};

export const initWebsocket = () => {
  const user = getUserDomain(false);
  socket.emit("hello", user);
  console.log("Sent hello with user: ", user);
};
