import axios from "axios";
import { useState } from "react";
import { baseURL } from "./constant";

const useConfirmRideByCaptain = () => {
  const [confirmRideLoading, setConfirmRideLoading] = useState(false);
  const confirmRide = async (rideId: string, captainId: string) => {
    const captainToken = localStorage.getItem("serverTokenCaptain");

    try {
      setConfirmRideLoading(true);

      const response = await axios.post(
        `${baseURL}/rides/confirm-ride-by-captain`,
        { rideId, captainId },
        {
          headers: {
            Authorization: `Bearer ${captainToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
      setConfirmRideLoading(false);
    } finally {
      setConfirmRideLoading(false);
    }
  };

  return { confirmRide, confirmRideLoading };
};

export default useConfirmRideByCaptain;
