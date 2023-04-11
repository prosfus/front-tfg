import { MediaConnection } from "peerjs";
import { User } from "./user";

export interface Notification {
  user: User;
  call: MediaConnection;
}

export interface Call {
  user: User;
  stream: MediaProvider;
}
