import { useContext } from "react";
import { AuthCaptainContextType } from "../interfaces";
import { AuthCaptainContext } from "../contexts";

const useCaptainAuth = (): AuthCaptainContextType => {
  const AuthCaptainService = useContext(AuthCaptainContext);

  if (!AuthCaptainService) {
    throw new Error("useCaptainAuth must be used within an AuthCaptainProvider");
  }

  return AuthCaptainService;
};

export default useCaptainAuth;
