import { Socket } from "socket.io-client";

export interface SocketContextType {
  socket: Socket | null;
  joinRoom: (userId: string, userType: "user" | "captain") => void;
}
