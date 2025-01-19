import axios from "axios";
import { useState } from "react";
import { baseURL } from "./constant";
import { CreateRideResponse } from "../interfaces";

const useCreateRide = () => {
  const [rideCreationLoading, setRideCreationLoading] = useState(false);

  const createRide = async (
    vehicleType: string,
    origin: string,
    destination: string
  ): Promise<CreateRideResponse | null> => {
    const userToken = localStorage.getItem("serverTokenUser");
  
    if (!userToken) {
      console.log("Token not found!");
    }
    try {
      setRideCreationLoading(true);
      const response: CreateRideResponse = await axios.post(
        `${baseURL}/rides/create`,
        { vehicleType, origin, destination },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log(response)

      return response;
    } catch (error) {
      console.log(error);
      setRideCreationLoading(false);
      return null;
    } finally {
      setRideCreationLoading(false);
    }
  };

  return { createRide, rideCreationLoading };
};

export default useCreateRide;
