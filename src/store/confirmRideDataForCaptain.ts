import { create } from "zustand";
import { rideDataSocketResponse } from "../interfaces";

interface FareAndPassengerDetails {
  fareAndPassengerDetails: rideDataSocketResponse | null;
  setFareAndPassengerDetails: (data: rideDataSocketResponse) => void;
}

const useFareAndPassengerDetails = create<FareAndPassengerDetails>((set) => ({
  fareAndPassengerDetails: null,
  setFareAndPassengerDetails: (data) => set({ fareAndPassengerDetails: data }),
}));

export default useFareAndPassengerDetails;
