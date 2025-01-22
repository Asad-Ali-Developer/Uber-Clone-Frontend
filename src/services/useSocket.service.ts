import { useContext } from "react";
import { SocketContext } from "../contexts";
import { SocketContextType } from "../interfaces";

const useSocket = (): SocketContextType => {
  const SocketContextService = useContext(SocketContext);

  if (!SocketContextService) {
    throw new Error("useSocket must be used within a SocketContextProvider");
  }

  return SocketContextService;
};

export default useSocket;
