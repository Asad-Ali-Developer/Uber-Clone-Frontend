import axios from "axios";
import { toast } from "react-toastify";
import { captainFormDataSignup } from "../schemas";
import { useCaptainAuth } from "../services";
import { baseURL } from "./constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface UseCaptainSignupReturn {
  signup: (data: captainFormDataSignup) => Promise<void>;
  loading: boolean;
}

const useCaptainSignup = (): UseCaptainSignupReturn => {
  const { storeTokenInLS } = useCaptainAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const signup = async (data: captainFormDataSignup) => {
    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}/captains/register`, data);

      console.log(response);

      if (response.status === 201) {
        toast.success("Captain registered successfully!");
        storeTokenInLS(response.data.token as string);
        navigate("/captain/home");
      }
    } catch (error: any) {
      // Display errors
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
  return { signup, loading };
};

export default useCaptainSignup;
