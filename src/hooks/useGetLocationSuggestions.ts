import axios from "axios";
import { useState } from "react";
import { baseURL } from "./constant";
import { LocationSuggestionResponse } from "../interfaces";

const useGetLocationSuggestions = () => {
  const [loading, setLoading] = useState(false);

  const getSuggestions = async (
    location: string
  ): Promise<LocationSuggestionResponse | null> => {
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

      // Ensure the response data is valid and contains suggestions
      if (response.data && response.data.suggestions.length > 0) {
        // Access the first suggestion's label
        const firstSuggestionLabel = response.data.suggestions[0].label;
        console.log(firstSuggestionLabel); // Log the first suggestion label
      }

      return response.data || null; // Ensure suggestions exist
    } catch (error) {
      console.error("Error fetching origin suggestions:", error);
      return null;
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
