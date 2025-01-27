import { AuthCaptain } from "./AuthCaptain";
import { AuthUser } from "./AuthUser";

export enum RideStatusEnum {
  pending = "pending",
  accepted = "accepted",
  ongoing = "ongoing",
  rejected = "rejected",
  completed = "completed",
}

export interface rideReponse {
  userId: string;
  origin: string;
  destination: string;
  fare: number;
  status: RideStatusEnum;
  otp: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  vehicleType: string;
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

export interface rideSocketReponse {
  userId: AuthUser;
  origin: string;
  destination: string;
  fare: number;
  status: RideStatusEnum;
  otp: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface rideDataSocketResponse {
  rideWithUser: rideSocketReponse;
  distance: number;
  duration: number;
  formattedDuration: string;
}

export interface rideCompletedDataResponse {
  messageNotification: string;
  rideWithUser: rideSocketReponse;
  ride: rideReponse
}