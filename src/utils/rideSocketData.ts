import { useEffect, useState } from "react";
import { useSocket } from "../services";

// Custom hook to handle socket data
const useRideSocketData = <T>(event: string) => {
  const { socket } = useSocket(); // Assuming useSocket is a hook
  const [data, setData] = useState<T | null>(null); // State to store socket data

  useEffect(() => {
    if (socket) {
      socket.on(event, (data: T) => {
        setData(data); // Store received data
      });
    }

    // Cleanup on unmount or socket changes
    return () => {
      socket?.off(event); // Remove event listener
    };
  }, [socket, event]);

  return data; // Return the received data
};

export default useRideSocketData;
