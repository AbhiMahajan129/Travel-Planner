import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import useWebSocket, { ReadyState } from "react-use-websocket";

// This small component will update the map's view to follow the marker
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

// Set a default center (now as an object to match mockData)
const DEFAULT_CENTER = { lat: 51.505, lng: -0.09 };

export default function RealTimeMap({
  center = DEFAULT_CENTER,
  isLive = false,
}) {
  const WS_URL = "wss://echo.websocket.org";

  // --- UPDATED LOGIC ---
  // Convert the {lat, lng} object prop into an array [lat, lng] for Leaflet
  const getCoordsAsArray = (coordsObj) => {
    if (coordsObj && coordsObj.lat && coordsObj.lng) {
      return [coordsObj.lat, coordsObj.lng];
    }
    // Fallback if data is bad
    return [DEFAULT_CENTER.lat, DEFAULT_CENTER.lng];
  };

  // The marker's position (as an array) starts at the 'center' prop
  const [markerPosition, setMarkerPosition] = useState(
    getCoordsAsArray(center)
  );

  // Only connect to WebSocket if 'isLive' is true
  const { lastJsonMessage, readyState } = useWebSocket(WS_URL, {
    shouldReconnect: () => isLive, // Only connect/reconnect if isLive
  });

  // 1. Update position when a new message is received (only if live)
  useEffect(() => {
    if (isLive && lastJsonMessage) {
      if (lastJsonMessage.lat && lastJsonMessage.lng) {
        const newPosition = [lastJsonMessage.lat, lastJsonMessage.lng];
        console.log("Received new position:", newPosition);
        setMarkerPosition(newPosition);
      }
    }
  }, [lastJsonMessage, isLive]);

  // 2. If the 'center' prop (which is an object) changes,
  //    update the marker's position (as an array).
  useEffect(() => {
    setMarkerPosition(getCoordsAsArray(center));
  }, [center]); // This now watches the 'center' object

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div>
      {/* Optionally show WebSocket status only if live */}
      {isLive && (
        <p style={{ position: "absolute", zIndex: 1001, top: 10, left: 50 }}>
          WebSocket Status: {connectionStatus}
        </p>
      )}

      <MapContainer
        center={markerPosition} // Leaflet always gets an array
        zoom={13}
        style={{ height: "100%", width: "100%" }} // Use 100% to fill parent
      >
        {/* This component makes the map follow the marker */}
        <ChangeView center={markerPosition} zoom={13} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={markerPosition}>
          <Popup>
            {isLive ? "I am a live marker!" : "This is the location."}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
