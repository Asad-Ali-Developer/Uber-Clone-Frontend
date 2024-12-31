import { AuthUser } from "./AuthUser";

export interface APIUserResponse {
  status: number;
  data: {
    user: AuthUser;
    token?: string | null;
    message?: string;
  };
  config: any;
  headers: any;
  request: any;
  statusText: string;
}
