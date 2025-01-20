import { createContext } from "react";

interface SocketContextType {
  sendMessage: (eventName: string, message: string) => void;
  receiveMessafe: (eventName: string, callback: string) => void;
}

const SocketContext = createContext<SocketContextType | null>(null);

export default SocketContext;
