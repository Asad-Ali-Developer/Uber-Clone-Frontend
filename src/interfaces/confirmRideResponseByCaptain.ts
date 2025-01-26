import { AuthCaptain } from "./AuthCaptain";
import { AuthUser } from "./AuthUser";
import { rideReponse } from "./CreateRideResponse";

export interface confirmRideResponseByCaptain {
  captain: AuthCaptain;
  updatedRide: rideReponse;
  rideUser: AuthUser;
}
