import { create } from "zustand";
import { confirmRideResponseByCaptain } from "../interfaces";

interface ConfirmRideDataStore {
  confirmRideData: confirmRideResponseByCaptain | null;
  setConfirmRideData: (data: confirmRideResponseByCaptain) => void;
}

const useConfirmRideDataStore = create<ConfirmRideDataStore>((set) => ({
  confirmRideData: null,
  setConfirmRideData: (data) => {
    console.log("Setting Zustand store with:", data);
    set({ confirmRideData: data });
  },
}));

export default useConfirmRideDataStore;
