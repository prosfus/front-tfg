import Peer, { MediaConnection } from "peerjs";
import { Call } from "../../models/calls";
import { getStream } from "../webrtc/domain/requestMediaDevices";
import { removeCallDomain } from "../calls/domain/removeCallDomain";
import { getWebsocketIdDomain } from "../user/domain/getWebsocketIdDomain";
import { getCallDomain } from "../calls/domain/getCallsDomain";
import { pushCall } from "../calls/domain/pushCallDomain";
import { emitCustomEvent } from "react-custom-events";

let PEER: Peer;
export const initPeer = (websocketId: string) => {
  PEER = new Peer(websocketId);
  PEER.on("open", () => {
    console.log("Peer connected");
  });

  PEER.on("call", (call) => {
    const stream = getStream();
    call.answer(stream);

    call.on("stream", (stream) => {
      console.log("Stream received");
      //pushCall(call.metadata.user, stream, call);
      emitCustomEvent("streamReceived", { stream, user: call.metadata.user });
    });
    call.on("close", () => {
      console.log("Call closed from peer");

      removeCallDomain();
    });
  });

  return PEER;
};

export const getPeer = () => {
  return PEER;
};

export const callUser = (userToCall: string, stream: MediaStream) => {
  const wesocketId = getWebsocketIdDomain(false);
  let call = PEER.call(userToCall, stream, { metadata: { user: wesocketId } });
  call?.on("stream", (stream) => {
    emitCustomEvent("streamReceived", { stream, user: userToCall });
  });
};

/*export const acceptCall = (call: MediaConnection) => {
  const stream = getStream();
  if (!stream) return;
  call.answer(stream);
};*/

export const hangupCall = (call: Call) => {
  /*call.call.close();
  hangupViaWS(call.call.peer, call.call.connectionId);
  removeCallDomain(call);*/
};
