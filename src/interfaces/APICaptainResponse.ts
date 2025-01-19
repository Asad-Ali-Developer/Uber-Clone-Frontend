import { AuthCaptain } from "./AuthCaptain";

export interface APICaptainResponse {
  status: number;
  data: {
    captain: AuthCaptain;
    token?: string | null;
    message?: string;
  };
  config?: any;
  headers?: any;
  request?: any;
  statusText?: string;
}
