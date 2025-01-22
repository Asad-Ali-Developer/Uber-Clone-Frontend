export interface SocketContextType {
  sendMessage: (eventName: string, message: string) => void;
  receiveMessage: (eventName: string, callback: () => {}) => void;
}
