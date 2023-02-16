import Peer from "peerjs";
import { User } from "../../models/user";
import { getStream } from "../webrtc/requestMediaDevices";

let PEER: Peer;
export const initPeer = (websocketId: string) => {
  PEER = new Peer(websocketId);
  PEER.on("open", () => {
    console.log("Peer connected");
  });
  PEER.on("call", (call) => {
    console.log("Call info: ", call);
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
  PEER.call(user.id, stream, { metadata: { user: user } });

  console.log("Call started");
};

export const CallFunctions = {
  startCall,
};
