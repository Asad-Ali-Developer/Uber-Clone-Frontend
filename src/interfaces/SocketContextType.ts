import { Socket } from "socket.io-client";
import { LocationCooridinatesTypes } from "./SocketUpdateCaptinLocation";

export interface SocketContextType {
  socket: Socket | null;
  joinRoom: (userId: string, userType: "user" | "captain") => void;
  updateCaptainLocation: (
    userId: string,
    location: LocationCooridinatesTypes
  ) => void;
}
