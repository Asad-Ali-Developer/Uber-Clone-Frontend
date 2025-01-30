import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Loader } from "../../assets";

interface Props {
  height?: string;
}

const LiveTracking: React.FC = ({ height }: Props) => {
  const [currentPosition, setCurrentPosition] = useState<
    [number, number] | null
  >(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  // Function to update location
  const updateLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition([latitude, longitude]);
        },
        (error) => console.error("Error getting location: ", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Fetch user's location every 5 seconds
  useEffect(() => {
    updateLocation();
    const interval = setInterval(updateLocation, 5000);
    return () => clearInterval(interval);
  }, []);

  // Initialize map once when the component mounts
  useEffect(() => {
    if (currentPosition && !mapRef.current) {
      mapRef.current = L.map("map", {
        center: currentPosition,
        zoom: 15,
        zoomControl: true, // Enable zoom control
        dragging: true, // Allow dragging
        scrollWheelZoom: true, // Allow zooming with scroll
      });

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapRef.current);

      // Add marker
      markerRef.current = L.marker(currentPosition).addTo(mapRef.current);
    }
  }, [currentPosition]);

  // Update marker position dynamically
  useEffect(() => {
    if (currentPosition && markerRef.current) {
      markerRef.current.setLatLng(currentPosition);
    }
  }, [currentPosition]);

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      className={`${height ? height : "h-[75vh]"}`}
    >
      {/* Map with Lower z-Index */}
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0, // Map stays behind other elements
        }}
      />

      {/* Loader while fetching location */}
      {!currentPosition && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={Loader} className="w-10" alt="Getting Location..." />
        </div>
      )}

      {/* Other Components with Higher z-Index */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1, // Ensuring other content is above the map
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        {/* {currentPosition && (
          <p>Current Location: {currentPosition[0]}, {currentPosition[1]}</p>
        )} */}
      </div>
    </div>
  );
};

export default LiveTracking;
