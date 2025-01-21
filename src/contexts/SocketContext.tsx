import { createContext } from "react";

interface SocketContextType {
  sendMessage: (eventName: string, message: string) => void;
  receiveMessage: (eventName: string, callback: () => {}) => void;
}

const SocketContext = createContext<SocketContextType | null>(null);

export default SocketContext;
