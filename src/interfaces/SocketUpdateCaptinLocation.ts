export interface LocationCooridinatesTypes {
  lat: number;
  lng: number;
}

export interface SocketUpdateCaptainLocation {
  userId: string;
  location: LocationCooridinatesTypes;
}
