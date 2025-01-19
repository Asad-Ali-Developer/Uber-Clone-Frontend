interface fareResponse {
  car: number;
  bike: number;
  auto: number;
}

export interface fareDataResponse {
  distance: number;
  duration: number;
  fare: fareResponse;
  message: string;
}

export interface GetFareResponse {
  status: number;
  data: fareDataResponse;
  config?: any;
  headers?: any;
  request?: any;
  statusText?: string;
}
