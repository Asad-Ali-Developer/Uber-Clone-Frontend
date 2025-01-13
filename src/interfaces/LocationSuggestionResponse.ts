export interface LocationSuggestion {
    label: string;
    latitude: string;
    longitude: string;
}

export interface LocationSuggestionResponse {
    suggestions: LocationSuggestion[];
}