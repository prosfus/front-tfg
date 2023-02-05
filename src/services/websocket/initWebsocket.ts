import { io } from "socket.io-client";
import { getUserDomain } from "../user/domain/getUserDomain";

const socket = io(
  import.meta.env.VITE_WEBSOCKET_URL || "http://localhost:8080"
);

socket.on("connect", () => {
  console.log("Connected to websocket server");
});

export const initWebsocket = () => {
  const user = getUserDomain(false);
  socket.emit("hello", user);
  console.log("Sent hello with user: ", user);
};

export default socket;
