import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { AuthCaptainContext } from "../contexts";
import { baseURL } from "../hooks/constant";
import { APICaptainResponse, AuthCaptain } from "../interfaces";

interface Props {
  children: ReactNode;
}

const AuthCaptainContextProvider = ({ children }: Props) => {
  const [authenticatedCaptain, setAuthenticatedCaptain] =
    useState<AuthCaptain | null>(null);


  // Get token from local storage - for checking if user is logged in
  const [captainToken, setCaptainToken] = useState(
    localStorage.getItem("serverTokenCaptain")
  );

  const storeTokenInLS = (token: string) => {
    localStorage.setItem("serverTokenCaptain", token);
    setCaptainToken(token);
  };

  const isLoggedIn = !!captainToken;

  const CaptainAuthentication = async () => {
    if (!captainToken || !isLoggedIn) return;

    try {
      const response: APICaptainResponse = await axios.get(
        `${baseURL}/captains/profile`,
        {
          headers: {
            Authorization: `Bearer ${captainToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      setAuthenticatedCaptain(response.data.captain);
    } catch (error) {
      console.log("No token or user found");
      setAuthenticatedCaptain(null);
    }
  };

  useEffect(() => {
    if (captainToken) {
      CaptainAuthentication();
    }
  }, [captainToken]);

  return (
    <AuthCaptainContext.Provider
      value={{
        storeTokenInLS,
        authenticatedCaptain,
        setAuthenticatedCaptain,
        isLoggedIn,
      }}
    >
      {children}
    </AuthCaptainContext.Provider>
  );
};

export default AuthCaptainContextProvider;
