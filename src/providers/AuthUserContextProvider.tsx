import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { AuthUserContext } from "../contexts";
import { baseURL } from "../hooks/constant";
import { APIUserResponse, AuthUser } from "../interfaces";

interface Props {
  children: ReactNode;
}

const AuthUserContextProvider = ({ children }: Props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<AuthUser | null>(
    null
  );
  const [userToken, setUserToken] = useState(
    localStorage.getItem("serverTokenUser")
  );

  const storeTokenInLS = (token: string) => {
    localStorage.setItem("serverTokenUser", token);
    setUserToken(token);
  };

  const isLoggedIn = !!userToken;

  const UserAuthentication = async () => {
    if (!userToken || !isLoggedIn) return;

    try {
      const response: APIUserResponse = await axios.get(
        `${baseURL}/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setAuthenticatedUser(response.data.user);

      // console.log(response);
      // console.log(authenticatedUser?.createdAt.split("T")[0]);
      // console.log(authenticatedUser?.createdAt.split("T")[1].split(".")[0]);
      // console.log(authenticatedUser?.createdAt);
    } catch (error) {
      // console.log("No token or user found");
      setAuthenticatedUser(null);
    }
  };

  useEffect(() => {
    if (userToken) {
      UserAuthentication();
    }
  }, [userToken]);

  return (
    <AuthUserContext.Provider
      value={{
        setAuthenticatedUser,
        storeTokenInLS,
        authenticatedUser,
        isLoggedIn,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
