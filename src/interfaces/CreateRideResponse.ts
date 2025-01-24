import { AuthCaptain } from "./AuthCaptain";

export enum RideStatusEnum {
  pending = "pending",
  accepted = "accepted",
  ongoing = "ongoing",
  rejected = "rejected",
  completed = "completed",
}

interface rideReponse {
  userId: string;
  origin: string;
  destination: string;
  fare: number;
  status: RideStatusEnum;
  otp: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface rideDataResponse {
  message: string;
  fare: number;
  ride: rideReponse;
  distance: number;
  duration: number;
  formattedDuration: string;
  captains: AuthCaptain[];
}

export interface CreateRideResponse {
  status: number;
  data: rideDataResponse;
  config?: any;
  headers?: any;
  request?: any;
  statusText?: string;
}
