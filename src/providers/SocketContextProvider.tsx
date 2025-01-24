import { ReactNode, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SocketContext } from "../contexts";
import { LocationCooridinatesTypes } from "../interfaces";

interface SocketContextProps {
  children: ReactNode;
}

const SocketContextProvider = ({ children }: SocketContextProps) => {
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
  }, []);

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

  // const getCaptainsInRange = (data: any) => {
  //     console.log(data)
  // }

  socket?.on("new-ride", (data) => {
    console.log(data);
  });

  return (
    <SocketContext.Provider value={{ socket, joinRoom, updateCaptainLocation }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
