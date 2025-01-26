import axios from "axios";
import { useState } from "react";
import { baseURL } from "./constant";

const useCompleteRideByCaptain = () => {
  const [loading, setLoading] = useState(false);

  const completeRide = async (rideId: string) => {
    const captainToken = localStorage.getItem("serverTokenCaptain");

    try {
      setLoading(true);

      const response = await axios.get(`${baseURL}/rides/complete-ride`, {
        params: { rideId },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${captainToken}`,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { completeRide, loading };
};

export default useCompleteRideByCaptain;
