export interface AuthUser {
  fullName: {
    firstName: string;
    lastName: string;
  };
  email: string;
  _id: string;
  socketId: string;
  createdAt: string;
  updatedAt: string;
}
