import { Server } from "socket.io";

const io = new Server(3000, {
    cors: { origin: "*" },
    transports: ["websocket", "polling"],
});

export default io;
