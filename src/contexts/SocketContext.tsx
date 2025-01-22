import { createContext } from "react";
import { SocketContextType } from "../interfaces";

const SocketContext = createContext<SocketContextType | undefined>(
  {} as SocketContextType
);

export default SocketContext;
