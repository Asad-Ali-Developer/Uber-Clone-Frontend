import axios from "axios";
import { baseURL } from "./constant";
import { useState } from "react";
import { GetFareResponse } from "../interfaces";

const useGetFare = () => {
  const [fareLoading, setFareLoading] = useState(false);

  const getFare = async (
    origin: string,
    destination: string
  ): Promise<GetFareResponse | null> => {
    const token = localStorage.getItem("serverTokenUser");

    if (!token) {
      console.log("Token Not Found!");
      return null;
    }

    try {
      setFareLoading(true);

      const response: GetFareResponse = await axios.get(
        `${baseURL}/rides/get-fare`,
        {
          params: { origin, destination },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(response.data.fare);
      // console.log(response.status);

      return response;
    } catch (error: any) {
      console.error("Error fetching fare:", error);
      return null;
    } finally {
      setFareLoading(false);
    }
  };

  return { getFare, fareLoading };
};

export default useGetFare;
