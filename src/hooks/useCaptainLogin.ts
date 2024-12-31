import axios from "axios";
import { APICaptainResponse } from "../interfaces";
import { baseURL } from "./constant";
import { toast } from "react-toastify";
import { useCaptainAuth } from "../services";
import { captainFormDataLogin } from "../schemas";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface UseCaptainLoginReturn {
  login: (data: captainFormDataLogin) => Promise<void>;
  loading: boolean;
}

const useCaptainLogin = (): UseCaptainLoginReturn => {
  const { storeTokenInLS } = useCaptainAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const login = async (data: captainFormDataLogin) => {
    try {
      setLoading(true);
      const response: APICaptainResponse = await axios.post(
        `${baseURL}/captains/login`,
        data
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        storeTokenInLS(response.data.token as string);
        navigate("/captain/home");
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
            toast.error("Internal server error!");
            break;
          default:
            toast.error(`Unexpected error: ${error.response.status}`);
            break;
        }
      } else {
        toast.error("An unknown error occurred!");
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    login,
    loading,
  };
};

export default useCaptainLogin;
