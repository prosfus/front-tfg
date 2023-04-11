import Peer, { MediaConnection } from "peerjs";
import { Notification } from "../../models/calls";
import { User } from "../../models/user";
import { getNotificationsDomain } from "../calls/domain/getNotificationsDomain";
import { setNotificationsDomain } from "../calls/domain/setNotificationsStore";
import { getStream } from "../webrtc/domain/requestMediaDevices";
import { pushCall } from "../calls/domain/pushCallDomain";

let PEER: Peer;
export const initPeer = (websocketId: string) => {
  PEER = new Peer(websocketId);
  PEER.on("open", () => {
    console.log("Peer connected");
  });
  PEER.on("call", (call) => {
    console.log("Call info: ", call);
    let notifications = getNotificationsDomain(false);
    notifications = [
      ...notifications,
      { user: call.metadata.user, call: call },
    ];
    setNotificationsDomain(notifications);
    call.on("stream", (stream) => {
      console.log("Stream received");
      /*const nose = document.getElementById("remoteVideo") as HTMLVideoElement;
      nose.srcObject = stream;*/
      pushCall(call.metadata.user, stream);
    });
  });

  return PEER;
};

export const getPeer = () => {
  return PEER;
};

export const startCall = (user: User) => {
  console.log("Start call", user);

  const stream = getStream();
  if (!stream) {
    console.log("No stream");
    return;
  }
  let call = PEER.call(user.id, stream, { metadata: { user: user } });
  call.on("stream", (stream) => {
    console.log("Stream received");
    /*const streamElement = document.getElementById(
      "remoteVideo"
    ) as HTMLVideoElement;
    streamElement.srcObject = stream;*/
    pushCall(user, stream);
  });
  console.log("Call started");
};

export const CallFunctions = {
  startCall,
};
export const acceptCall = (call: MediaConnection) => {
  const stream = getStream();
  if (!stream) return;
  call.answer(stream);
};
