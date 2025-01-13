interface LocationSuggestion {
    label: string;
    latitude: number;
    longitude: number;
}

export interface LocationSuggestionResponse {
    suggestions: LocationSuggestion[];
}