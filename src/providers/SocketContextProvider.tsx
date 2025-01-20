import { ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

const socketUrl = `${process.env.VITE_BASE__URL}`;

const SocketContextProvider = ({ children }: ContextProps) => {
  return <div>{children}</div>;
};

export default SocketContextProvider;
