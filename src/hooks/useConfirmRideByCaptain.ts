import axios from "axios";
import { useState } from "react";
import { baseURL } from "./constant";

const useConfirmRideByCaptain = () => {
  const [confirmRideLoading, setConfirmRideLoading] = useState(false);
  const confirmRide = async () => {
    try {
      setConfirmRideLoading(true);

      const response = await axios.post(`${baseURL}/rides/confirm-ride-by-captain`);
    
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
