export interface LocationSuggestion {
  label: string;
  latitude: string;
  longitude: string;
}

export interface LocationSuggestionResponse {
  status: number;
  data: {
    suggestions: LocationSuggestion[];
  };
  config: any;
  headers: any;
  request: any;
  statusText: string;
}
