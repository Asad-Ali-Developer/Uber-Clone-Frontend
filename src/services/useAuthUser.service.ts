import { useContext } from "react";
import { AuthUserContext } from "../contexts";
import { AuthUserContextType } from "../interfaces";

const useUserAuth = (): AuthUserContextType => {
  const AuthUserService = useContext(AuthUserContext);

  if (!AuthUserService) {
    throw new Error("useUserAuth must be used within an AuthUserProvider");
  }

  return AuthUserService;
};

export default useUserAuth;
