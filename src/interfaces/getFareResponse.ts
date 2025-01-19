interface fare {
  car: number;
  bike: number;
  auto: number;
}

export interface GetFareResponse {
  status: number;
  data: {
    distance: number;
    duration: number;
    fare: fare;
    message: string;
  };
  config: any;
  headers: any;
  request: any;
  statusText: string;
}
