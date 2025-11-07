// src/data/pages/PlanTripForm.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Badge, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function LocationMarker({ position, setPosition, searchQuery }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  useEffect(() => {
    if (searchQuery) {
      const geocode = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
          );
          const data = await response.json();
          if (data && data[0]) {
            const { lat, lon } = data[0];
            const latlng = { lat: parseFloat(lat), lng: parseFloat(lon) };
            setPosition(latlng);
            map.setView(latlng, 13);
          }
        } catch (err) {
          console.error('Geocoding error:', err);
        }
      };
      geocode();
    }
  }, [searchQuery, map, setPosition]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Selected Location</Popup>
    </Marker>
  );
}

export default function PlanTripForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Step 1: Basic Info
  const [planName, setPlanName] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureLocation, setDepartureLocation] = useState('');
  const [departureDate, setDepartureDate] = useState(null);

  // Step 2: Sites
  const [siteName, setSiteName] = useState('');
  const [sites, setSites] = useState([]);

  // Map
  const [mapPosition, setMapPosition] = useState(null);
  const [mapSearch, setMapSearch] = useState('');

  // Validation
  const isStep1Valid = planName && arrivalLocation && arrivalDate && departureLocation && departureDate;

  const handleNext = () => {
    if (step === 1 && isStep1Valid) {
      setStep(2);
    }
  };

  const addSite = () => {
    if (siteName.trim()) {
      setSites([...sites, { id: Date.now(), name: siteName.trim() }]);
      setSiteName('');
      setMapSearch('');
    }
  };

  const removeSite = (id) => {
    setSites(sites.filter(s => s.id !== id));
  };

  const selectSiteFromMap = (name) => {
    setSiteName(name);
    setMapSearch('');
  };

  const saveAndFinish = () => {
    const tripData = {
      planName,
      arrivalLocation,
      arrivalDate: arrivalDate?.toLocaleDateString(),
      departureLocation,
      departureDate: departureDate?.toLocaleDateString(),
      sites: sites.map(s => s.name),
    };
    localStorage.setItem('plannedTrip', JSON.stringify(tripData));
    navigate('/plan-trip');
  };

  return (
    <>
      {/* HERO */}
      <div className=" text-black py-4">
        <Container>
          <h1 className="display-5 fw-bold text-center">Create Your Trip Plan</h1>
          <p className="text-center mb-0">Step {step} of 2</p>
        </Container>
      </div>

      <Container className="my-5">
        <Row>
          {/* FORM COLUMN */}
          <Col lg={step === 1 ? 8 : 6} className="mx-auto">
            {step === 1 ? (
              /* STEP 1: BASIC INFO */
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Plan Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g., Summer Europe Adventure"
                        value={planName}
                        onChange={(e) => setPlanName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Arrival Location <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g., Paris, France"
                        value={arrivalLocation}
                        onChange={(e) => setArrivalLocation(e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Arrival Date</Form.Label>
                      <DatePicker
                        selected={arrivalDate}
                        onChange={setArrivalDate}
                        className="form-control"
                        placeholderText="Select date"
                        minDate={new Date()}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Departure Location <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g., Rome, Italy"
                        value={departureLocation}
                        onChange={(e) => setDepartureLocation(e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Departure Date</Form.Label>
                      <DatePicker
                        selected={departureDate}
                        onChange={setDepartureDate}
                        className="form-control"
                        placeholderText="Select date"
                        minDate={arrivalDate || new Date()}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-end mt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    disabled={!isStep1Valid}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            ) : (
              /* STEP 2: SITES + MAP */
              <Row>
                {/* LEFT: SITES FORM */}
                <Col md={6}>
                  <div className="sticky-top" style={{ top: '100px' }}>
                    <h5 className="mb-3">Add Sites to Visit</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Site Name</Form.Label>
                      <div className="d-flex gap-2">
                        <Form.Control
                          type="text"
                          placeholder="e.g., Eiffel Tower"
                          value={siteName}
                          onChange={(e) => setSiteName(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addSite()}
                        />
                        <Button variant="outline-primary" onClick={addSite}>
                          Add
                        </Button>
                      </div>
                    </Form.Group>

                    {/* Search for Map */}
                    <Form.Group className="mb-3">
                      <Form.Label>Search on Map</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type to search..."
                        value={mapSearch}
                        onChange={(e) => setMapSearch(e.target.value)}
                      />
                    </Form.Group>

                    {/* Selected Sites */}
                    <ListGroup className="mb-4" width="100%">
                      {sites.length === 0 ? (
                        <ListGroup.Item className="text-muted text-center">
                          No sites added yet
                        </ListGroup.Item>
                      ) : (
                        sites.map((site) => (
                          <ListGroup.Item
                            key={site.id}
                            className="d-flex justify-content-between align-items-center"
                          >
                            {site.name}
                            <Badge
                              bg="danger"
                              className="cursor-pointer"
                              onClick={() => removeSite(site.id)}
                            >
                              ×
                            </Badge>
                          </ListGroup.Item>
                        ))
                      )}
                    </ListGroup>

                    <div className="d-flex gap-2">
                      <Button variant="secondary" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <Button
                        variant="success"
                        onClick={saveAndFinish}
                        disabled={sites.length === 0}
                      >
                        Save & Finish
                      </Button>
                    </div>
                  </div>
                </Col>

                {/* RIGHT: MAP */}
                <Col md={6}>
                  <div className="position-sticky" style={{ top: '100px', height: '70vh' }}>
                    <MapContainer
                      center={mapPosition || [20, 0]}
                      zoom={2}
                      style={{ height: '100%', borderRadius: '12px' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
                      />
                      <LocationMarker
                        position={mapPosition}
                        setPosition={setMapPosition}
                        searchQuery={mapSearch}
                      />
                    </MapContainer>

                    {mapPosition && (
                      <Alert variant="info" className="mt-2 p-2 small">
                        Click on map to select exact location
                      </Alert>
                    )}
                  </div>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}