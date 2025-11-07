import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  Modal,
  ListGroup,
  Spinner,
  Alert,
  Badge,
} from "react-bootstrap";
import { useLocation } from "../../hooks/useLocation";

// Mock Data: Simulated Dustbins near Guwahati (26.182 N, 91.737 E)
const MOCK_DUSTBIN_DATA = [
  {
    id: 1,
    name: "MG Road North (Recycling)",
    lat: 26.183,
    lng: 91.735,
    type: "Recycling",
  },
  {
    id: 2,
    name: "Fancy Bazaar Corner (General)",
    lat: 26.18,
    lng: 91.74,
    type: "General",
  },
  {
    id: 3,
    name: "Railway Station Gate (E-Waste)",
    lat: 26.178,
    lng: 91.731,
    type: "E-Waste",
  },
  {
    id: 4,
    name: "Kamakhya Viewpoint (General)",
    lat: 26.175,
    lng: 91.738,
    type: "General",
  },
];

const DEFAULT_CENTER = { lat: 26.182, lng: 91.737 }; // Default Guwahati center

// Helper function to calculate distance (approximation)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c * 1000).toFixed(0); // Distance in meters
};

export default function DustbinFinder() {
  const { loading, location, error, getLocation } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [nearestBins, setNearestBins] = useState([]);
  const [directionsTarget, setDirectionsTarget] = useState(null);

  const handleShow = () => {
    setDirectionsTarget(null);
    getLocation(); // Request user location
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // Effect to run when user location is obtained
  useEffect(() => {
    if (location) {
      // 1. Calculate and sort bins by distance
      const sortedBins = MOCK_DUSTBIN_DATA.map((bin) => ({
        ...bin,
        distance: calculateDistance(
          location.lat,
          location.lng,
          bin.lat,
          bin.lng
        ),
      })).sort((a, b) => a.distance - b.distance);

      setNearestBins(sortedBins);
    }
  }, [location]);

  // Function to generate and open Google Maps directions link
  const getDirections = useCallback(
    (targetLat, targetLng) => {
      // Determine the origin: use user's location if available, otherwise use default mock center
      const originLat = location ? location.lat : DEFAULT_CENTER.lat;
      const originLng = location ? location.lng : DEFAULT_CENTER.lng;

      setDirectionsTarget({ lat: targetLat, lng: targetLng });

      // Google Maps Directions URL is used for actual navigation
      const directionsURL = `https://www.google.com/maps/dir/?api=1&origin=${originLat},${originLng}&destination=${targetLat},${targetLng}&travelmode=walking`;

      // Open in a new tab
      window.open(directionsURL, "_blank");
    },
    [location]
  );

  // Generate a map URL to show the general area (Fix for Invalid Parameter 'markers')
  const getStaticMapURL = () => {
    const centerPoint = location
      ? `${location.lat},${location.lng}`
      : `${DEFAULT_CENTER.lat},${DEFAULT_CENTER.lng}`;

    // We use the simpler map query URL which accepts center coordinates
    return `https://maps.google.com/maps?q=${centerPoint}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  };

  const mapIframeSrc = getStaticMapURL();

  return (
    <>
      {/* The Floating Dustbin Button */}
      <Button
        onClick={handleShow}
        className="rounded-circle d-flex align-items-center justify-content-center shadow"
        variant="success"
        style={{
          position: "fixed",
          bottom: "170px",
          right: "30px",
          width: "60px",
          height: "60px",
          zIndex: 1002,
          border: "none",
          fontSize: "28px",
          backgroundColor: "#198754", // Green for environment/cleanliness
        }}
        aria-label="Find Nearest Dustbin"
      >
        🗑️
      </Button>

      {/* The Map Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Find Nearest Dustbins 🗑️</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Status and Error Messages */}
          {loading && (
            <Alert variant="info" className="text-center">
              <Spinner size="sm" /> Finding your location...
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="text-center">
              Location Error: {error}
            </Alert>
          )}

          {/* Static Map Embed Section (Now working without markers) */}
          <div
            style={{
              height: "400px",
              width: "100%",
              marginBottom: "20px",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #ccc",
              display: loading || error ? "none" : "block",
            }}
          >
            <iframe
              title="Nearest Dustbins Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={mapIframeSrc}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {!location && (
              <Alert variant="warning" className="m-0 text-center">
                Using default location (Guwahati) until permission is granted.
              </Alert>
            )}
            <p className="mt-2 text-muted small text-center">
              (Map shows the area; tap list item for exact directions.)
            </p>
          </div>

          {/* Directions Status */}
          {directionsTarget && (
            <Alert variant="success" className="text-center">
              Directions to **
              {/* Using regex to get the name without the type in parentheses */}
              {
                nearestBins
                  .find((b) => b.lat === directionsTarget.lat)
                  ?.name.split(/\s\(/)[0]
              }
              ** opened in a new tab!
            </Alert>
          )}

          {/* List View of Nearest Bins */}
          <h5 className="mb-2 mt-2">Tap below for instant directions:</h5>
          <ListGroup style={{ maxHeight: "200px", overflowY: "auto" }}>
            {nearestBins.map((bin) => (
              <ListGroup.Item
                key={bin.id}
                action
                onClick={() => getDirections(bin.lat, bin.lng)}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  {/* Display name without the type in parentheses */}
                  <strong>{bin.name.split(/\s\(/)[0]}</strong>{" "}
                  <Badge
                    bg={
                      bin.type === "Recycling"
                        ? "primary"
                        : bin.type === "E-Waste"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {bin.type}
                  </Badge>
                </div>
                <span className="text-muted small">
                  ~
                  {calculateDistance(
                    location ? location.lat : DEFAULT_CENTER.lat,
                    location ? location.lng : DEFAULT_CENTER.lng,
                    bin.lat,
                    bin.lng
                  )}
                  m
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
