import { create } from "zustand";

interface ConfirmRideDataStore {
  confirmRideData: any;
  setConfirmRideData: (data: any) => void;
}

const useConfirmRideDataStore = create<ConfirmRideDataStore>((set) => ({
  confirmRideData: null,
  setConfirmRideData: (data: any) => set({ confirmRideData: data }),
}));

export default useConfirmRideDataStore;
