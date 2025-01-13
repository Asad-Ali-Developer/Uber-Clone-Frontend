import axios from "axios";
import { useState } from "react";
import { baseURL } from "./constant";
import { LocationSuggestionResponse } from "../interfaces";

const useGetLocationSuggestions = () => {
  const [loading, setLoading] = useState(false);

  const getSuggestions = async (location: string) => {
    try {
      setLoading(true);

      const userToken = localStorage.getItem("serverTokenUser"); // Retrieve token here

      const response = await axios.get<LocationSuggestionResponse>(
        `${baseURL}/maps/get-address-suggestions`,
        {
          params: { address: location },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      return response.data || []; // Ensure suggestions exist
    } catch (error) {
      console.error("Error fetching origin suggestions:", error);
      return []; // Return empty array on error
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getSuggestions,
  };
};

export default useGetLocationSuggestions;
