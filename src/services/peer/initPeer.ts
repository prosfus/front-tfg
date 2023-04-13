import Peer, { MediaConnection } from "peerjs";
import { Call, Notification } from "../../models/calls";
import { User } from "../../models/user";
import { getNotificationsDomain } from "../calls/domain/getNotificationsDomain";
import { setNotificationsDomain } from "../calls/domain/setNotificationsStore";
import { getStream } from "../webrtc/domain/requestMediaDevices";
import { pushCall } from "../calls/domain/pushCallDomain";
import { removeCallDomain } from "../calls/domain/removeCallDomain";
import { getCallsDomain } from "../calls/domain/getCallsDomain";
import { hangupViaWS } from "../websocket/infrastructure/initWebsocket";
import { getUserDomain } from "../user/domain/getUserDomain";

let PEER: Peer;
export const initPeer = (websocketId: string) => {
  PEER = new Peer(websocketId);
  PEER.on("open", () => {
    console.log("Peer connected");
  });
  PEER.on("call", (call) => {
    console.log("Call received: ", call);
    let notifications = getNotificationsDomain(false);
    notifications = [
      ...notifications,
      { user: call.metadata.user, call, orientation: "incoming" },
    ];
    setNotificationsDomain(notifications);
    call.on("stream", (stream) => {
      console.log("Stream received");
      pushCall(call.metadata.user, stream, call);
    });
    call.on("close", () => {
      console.log("Call closed from peer");

      const calls = getCallsDomain(false);
      const callFound = calls.find(
        (c) => c.call.connectionId === call.connectionId
      );
      if (callFound) {
        removeCallDomain(callFound);
      }
    });
  });

  return PEER;
};

export const getPeer = () => {
  return PEER;
};

export const startCall = (user: User) => {
  console.log("Start call", user);

  const notifications = getNotificationsDomain(false);

  const stream = getStream();
  if (!stream) {
    console.log("No stream");
    return;
  }
  const userConnected = getUserDomain(false);
  let call = PEER.call(user.id, stream, { metadata: { user: userConnected } });
  const newNotifications = [
    ...notifications,
    { user: user, orientation: "outgoing", call } as Notification,
  ];
  setNotificationsDomain(newNotifications);
  call.on("stream", (stream) => {
    console.log("Stream received");
    const notifications = getNotificationsDomain(false);
    const newNotifications = notifications.filter((n) => n.user.id !== user.id);
    setNotificationsDomain(newNotifications);
    pushCall(user, stream, call);
  });
  call.on("close", () => {
    console.log("Call closed from call");
    const calls = getCallsDomain(false);
    const callFound = calls.find(
      (c) => c.call.connectionId === call.connectionId
    );
    if (callFound) {
      removeCallDomain(callFound);
    }
  });
};

export const CallFunctions = {
  startCall,
};
export const acceptCall = (call: MediaConnection) => {
  const stream = getStream();
  if (!stream) return;
  call.answer(stream);
};

export const hangupCall = (call: Call) => {
  call.call.close();
  hangupViaWS(call.call.peer, call.call.connectionId);
  removeCallDomain(call);
};
