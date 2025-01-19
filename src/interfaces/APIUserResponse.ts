import { AuthUser } from "./AuthUser";

export interface APIUserResponse {
  config?: any;
  data: {
    user: AuthUser;
    token?: string | null;
    message?: string;
  };
  status: number;
  headers?: any;
  request?: any;
  statusText?: string;
}
