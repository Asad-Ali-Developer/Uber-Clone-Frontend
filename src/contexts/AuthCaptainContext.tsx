import { createContext } from "react";
import { AuthCaptainContextType } from "../interfaces";

// Create the context with undefined as the default value
const AuthCaptainContext = createContext<AuthCaptainContextType | undefined>(
  {} as AuthCaptainContextType
);
export default AuthCaptainContext;
