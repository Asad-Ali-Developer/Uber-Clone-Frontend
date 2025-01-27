import React, { useState, useEffect } from "react";
import L from "leaflet"; // Leaflet library
import "leaflet/dist/leaflet.css"; // Leaflet styles

const LiveTracking: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<[number, number] | null>(null);

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
    updateLocation(); // Get initial location
    const interval = setInterval(updateLocation, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Create map and marker
  useEffect(() => {
    if (currentPosition) {
      const map = L.map("map", {
        center: currentPosition,
        zoom: 15,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

      L.marker(currentPosition).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [currentPosition]);

  if (!currentPosition) {
    return <p>Loading current location...</p>;
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Map */}
      <div id="map" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />

      {/* Other Components */}
      <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10, backgroundColor: "white", padding: "10px", borderRadius: "5px" }}>
        <p>Current Location: {currentPosition ? `${currentPosition[0]}, ${currentPosition[1]}` : "Loading..."}</p>
      </div>
    </div>
  );
};

export default LiveTracking;
