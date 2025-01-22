import { ReactNode, useEffect } from "react";
import { SocketContext } from "../contexts";
import { io, Socket } from "socket.io-client";

interface SocketContextProps {
  children: ReactNode;
}

const socket: Socket = io("http://localhost:4000");

const SocketContextProvider = ({ children }: SocketContextProps) => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server!");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected to server!");
    });
  }, []);

  const sendMessage = (eventName: string, message: string) => {
    socket.emit(eventName, message);
  };
  const receiveMessage = (eventName: string, callback: () => {}) => {
    socket.on(eventName, callback);
  };

  return (
    <SocketContext.Provider value={{ sendMessage, receiveMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
