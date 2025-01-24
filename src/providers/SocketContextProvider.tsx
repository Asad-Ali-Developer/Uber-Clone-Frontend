import { ReactNode, useEffect, useState } from "react";
import { SocketContext } from "../contexts";
import { io, Socket } from "socket.io-client";



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

    if(socket){
      socket.emit("join", { userId, userType });
    }
  };

  return (
    <SocketContext.Provider value={{ socket, joinRoom }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
