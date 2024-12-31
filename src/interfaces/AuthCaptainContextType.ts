import { AuthCaptain } from "./AuthCaptain";

// Define the context type with user and a setter function
export interface AuthCaptainContextType {
  storeTokenInLS: (token: string) => void;
  authenticatedCaptain: AuthCaptain | null;
  setAuthenticatedCaptain: (captain: AuthCaptain | null) => void;
  isLoggedIn: boolean;
}
