import { ReactNode, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SocketContext } from "../contexts";
import { LocationCooridinatesTypes } from "../interfaces";
import { useCaptainAuth, useUserAuth } from "../services";

interface SocketContextProps {
  children: ReactNode;
}

const SocketContextProvider = ({ children }: SocketContextProps) => {
  const { authenticatedUser } = useUserAuth();
  const { authenticatedCaptain } = useCaptainAuth();

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance: Socket = io(import.meta.env.VITE_BASEURL, {
      withCredentials: true,
      transports: ["websocket"],
    });

    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("Connected to server!");
    });

    socketInstance.on("disconnect", () => {
      console.log("Disconnected to server!");
    });
  }, [authenticatedUser, authenticatedCaptain]);

  const joinRoom = (userId: string, userType: "user" | "captain") => {
    console.log(userId, userType);

    if (socket) {
      socket.emit("joinRoom", { userId, userType });
    }
  };

  const updateCaptainLocation = (
    userId: string,
    location: LocationCooridinatesTypes
  ) => {
    // console.log(userId, location);

    if (socket) {
      socket.emit("update-captain-location", { userId, location });
    }
  };

  return (
    <SocketContext.Provider value={{ socket, joinRoom, updateCaptainLocation }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
