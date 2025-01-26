import axios from "axios";
import { useState } from "react";
import { baseURL } from "./constant";

const useSubmitOtp = () => {
  const [loading, setLoading] = useState(false);

  const submitOtp = async (otp: string, rideId: string) => {
    const captainToken = localStorage.getItem("serverTokenCaptain");

    try {
      setLoading(true);

      const response = await axios.post(
        `${baseURL}/rides/start-ride`,
        { otp, rideId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${captainToken}`,
          },
        }
      );

      return response;
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { submitOtp, loading };
};

export default useSubmitOtp;
