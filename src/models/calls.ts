import { MediaConnection } from "peerjs";
import { User } from "./user";

export interface Notification {
  user: User;
  call: MediaConnection;
}
