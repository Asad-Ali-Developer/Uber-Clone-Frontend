import { AuthUser } from "./AuthUser";

// Define the context type with user and a setter function
export interface AuthUserContextType {
  storeTokenInLS: (token: string) => void;
  authenticatedUser: AuthUser | null;
  setAuthenticatedUser: (user: AuthUser | null) => void;
  isLoggedIn: boolean;
}
