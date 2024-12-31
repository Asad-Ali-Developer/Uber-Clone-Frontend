interface FullName {
  firstName: string;
  lastName?: string;
}

interface StatusEnum {
  active: "active";
  inactive: "inactive";
}

interface Status {
  type: string;
  enum: StatusEnum;
  default: "inactive";
}

interface Location {
  lat: number;
  lng: number;
}

interface VehicleEnum {
  car: "car";
  bike: "bike";
  auto: "auto";
}

interface VehicleType {
  type: string;
  enum: VehicleEnum;
}

interface Vehicle {
  color: string;
  plate: string;
  capacity: number;
  vehicleType: VehicleType;
}

export interface AuthCaptain {
  fullName: FullName;
  email: string;
  _id: string;
  socketId?: string;
  status: Status;
  vehicle: Vehicle;
  location?: Location;
  createdAt: string;
  updatedAt: string;
}
