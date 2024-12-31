import axios from "axios";
import { toast } from "react-toastify";
import { useUserAuth } from "../services";
import { baseURL } from "./constant";
import { useNavigate } from "react-router-dom";
import { APIUserResponse } from "../interfaces";
import { userFormDataLogin } from "../schemas";
import { useState } from "react";

interface UseUserLoginReturn {
  login: (data: userFormDataLogin) => Promise<void>;
  loading: boolean;
}

const useUserLogin = (): UseUserLoginReturn => {
  const { storeTokenInLS } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = async (data: userFormDataLogin) => {
    try {
      setLoading(true);
      const response: APIUserResponse = await axios.post(
        `${baseURL}/users/login`,
        data
      );

      // Handle success (2xx status codes)
      if (response.status === 200) {
        toast.success(response.data.message);
        storeTokenInLS(response.data.token as string);
        navigate("/user/home", { replace: true }); // Immediately navigate to home page
      }
    } catch (error: any) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.error(error.response.data.message);
            break;
          case 401:
            toast.error(error.response.data.message);
            break;
          case 500:
            toast.error(error.response.data.message);
            break;
          default:
            toast.error(`Unexpected error: ${error.response.status}`);
            break;
        }
      } else {
        // If no response (e.g., network error)
        toast.error("An unknown error occurred!");
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useUserLogin;
