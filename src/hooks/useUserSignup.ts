import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { APIUserResponse } from "../interfaces";
import { useUserAuth } from "../services";
import { baseURL } from "./constant";
import { userFormDataSignup } from "../schemas";
import { useState } from "react";

interface UseUserSignupReturn {
  signup: (data: userFormDataSignup) => Promise<void>;
  loading: boolean;
}

const useUserSignup = (): UseUserSignupReturn => {
  const { storeTokenInLS } = useUserAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const signup = async (data: userFormDataSignup) => {
    try {
      setLoading(true);
      const response: APIUserResponse = await axios.post(
        `${baseURL}/users/register`,
        data
      );

      // Handle success response
      if (response.status === 201) {
        toast.success("User registered successfully!");
        storeTokenInLS(response.data.token as string);
        navigate("/user/home"); // Immediately navigate to home page
      }
    } catch (error: any) {
      console.log(error);

      // Error handling when response is available
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.error("Bad request. Please check your input.");
            break;
          case 401:
            toast.error("User already exists!");
            break;
          case 500:
            toast.error("Internal server error!");
            break;
          default:
            toast.error(`Unexpected error: ${error.response.status}`);
            break;
        }
      } else {
        // Handle network errors or when no response is received
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useUserSignup;
