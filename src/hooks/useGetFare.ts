import axios from "axios";
import { baseURL } from "./constant";
import { useState } from "react";

interface FareResponse {
  fare: number;
  distance: number;
  duration: number;
}

const useGetFare = () => {
  const [fareLoading, setFareLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getFare = async (
    origin: string,
    destination: string
  ): Promise<FareResponse | null> => {
    const token = localStorage.getItem("serverTokenUser");
    console.log(token)

    if (!token) {
      setError("User is not authenticated.");
      return null;
    }

    try {
      setFareLoading(true);
      setError(null);

      const response = await axios.get<FareResponse>(`${baseURL}/get-fare`, {
        params: { origin, destination },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data || null;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Error fetching fare.";
      setError(errorMessage);
      console.error("Error fetching fare:", error);
      return null;
    } finally {
      setFareLoading(false);
    }
  };

  return { getFare, fareLoading, error };
};

export default useGetFare;
