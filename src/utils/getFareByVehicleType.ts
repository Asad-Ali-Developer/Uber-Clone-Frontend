import { fareDataResponse, fareResponse } from "../interfaces";

const getFareByVehicleType = (
  vehicleType: string,
  faresData: fareDataResponse | null
): string => {
  if (!faresData || !faresData.fare[vehicleType as keyof fareResponse]) {
    return "Fare not available";
  }

  if (!Object.keys(faresData.fare).includes(vehicleType)) {
    return "Invalid vehicle type";
  }

  return faresData.fare[vehicleType as keyof fareResponse].toString();
};

export default getFareByVehicleType;