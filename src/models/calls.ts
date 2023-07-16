import { User } from "./user";

export interface Notification {
  user: User;
  orientation: NotificationOrientation;
  callId: string;
}

export interface CallStream {
  user: string;
  stream: MediaStream;
}

export type NotificationOrientation = "outgoing" | "incoming";

export interface Call {
  callId: string;
  userIds: string[];
  streams: CallStream[];
}
