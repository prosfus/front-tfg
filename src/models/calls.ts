import { MediaConnection } from "peerjs";
import { User } from "./user";

export interface Notification {
  user: User;
  call: MediaConnection;
  orientation: "outgoing" | "incoming";
}

export interface Call {
  user: User;
  stream: MediaProvider;
  call: MediaConnection;
}
