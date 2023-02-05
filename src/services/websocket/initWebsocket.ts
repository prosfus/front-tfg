import { io } from "socket.io-client";
import { User } from "../../models/user";
import { setOnlineUsersDomain } from "../onlineUsers/domain/setOnlineUsersDomain";
import { getUserDomain } from "../user/domain/getUserDomain";
import { setWebsocketIdDomain } from "../user/domain/setWebsocketIdDomain";

const socket = io(
  import.meta.env.VITE_WEBSOCKET_URL || "http://localhost:8080"
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

export const initWebsocket = () => {
  const user = getUserDomain(false);
  socket.emit("hello", user);
  console.log("Sent hello with user: ", user);
};

export default socket;
