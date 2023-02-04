import { io } from "socket.io-client";

const socket = io(
  import.meta.env.VITE_WEBSOCKET_URL || "http://localhost:8080"
);

socket.on("connect", () => {
  console.log("Connected to websocket server");
});

export const initWebsocket = () => {
  socket.emit("hello", { name: "pau" });
};

export default socket;
