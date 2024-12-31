import { createContext } from "react";
import { AuthUserContextType } from "../interfaces";

// Create the context with undefined as the default value
const AuthUserContext = createContext<AuthUserContextType | undefined>(
  {} as AuthUserContextType
);
export default AuthUserContext;
