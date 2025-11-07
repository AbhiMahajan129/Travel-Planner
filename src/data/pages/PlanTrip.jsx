// src/data/pages/PlanTrip.jsx
import { useState, useEffect } from 'react';
import { Container, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function PlanTrip() {
  const [savedTrip, setSavedTrip] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('plannedTrip');
    if (data) {
      setSavedTrip(JSON.parse(data));
    }
  }, []);

  const clearTrip = () => {
    localStorage.removeItem('plannedTrip');
    setSavedTrip(null);
  };

  const addTrip = () => {
    const existingTrips = JSON.parse(localStorage.getItem('myTrips') || '[]');
    const tripToSave = {
      id: Date.now(),
      ...savedTrip,
      createdAt: new Date().toLocaleString()
    };
    localStorage.setItem('myTrips', JSON.stringify([...existingTrips, tripToSave]));
    
    alert('Trip added to your collection!');
    navigate('/my-trips');
  };

  return (
    <>
      {/* REMOVED BLUE BG - NOW WHITE */}
      <div className="py-5">
        <Container>
          <h1 className="display-4 fw-bold text-center">Your Travel Plan</h1>
          <p className="lead text-center mb-0 text-muted">Review and save your custom itinerary</p>
        </Container>
      </div>

      <Container className="my-5">
        {!savedTrip ? (
          <div className="text-center py-5">
            <i className="bi bi-journal-text text-muted" style={{ fontSize: '4rem' }}></i>
            <h3 className="text-muted mb-3">NO PLAN</h3>
            <p className="text-secondary mb-4">Start building your dream trip now!</p>
            <Button as={Link} to="/plan-trip/form" variant="primary" size="lg" className="px-5">
              Add Plans
            </Button>
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h4 fw-bold">{savedTrip.planName}</h2>
              <div>
                <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => navigate('/plan-trip/form')}>
                  Edit
                </Button>
                <Button variant="outline-danger" size="sm" onClick={clearTrip}>
                  Clear
                </Button>
              </div>
            </div>

            <Alert variant="light" className="mb-4">
              <div className="d-flex flex-wrap gap-3 small text-muted">
                <div>
                  <strong>Arrival:</strong> {savedTrip.arrivalLocation} on {savedTrip.arrivalDate}
                </div>
                <div>
                  <strong>Departure:</strong> {savedTrip.departureLocation} on {savedTrip.departureDate}
                </div>
              </div>
            </Alert>

            <h5 className="mb-3">Sites to Visit</h5>
            <Row className="g-3">
              {savedTrip.sites.map((site, index) => (
                <Col xs={12} md={6} key={index}>
                  <Card className="border-start border-primary border-3 shadow-sm h-100">
                    <Card.Body className="py-3">
                      <div className="d-flex align-items-center">
                        <div
                          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}
                        >
                          {index + 1}
                        </div>
                        <div className="fw-semibold">{site}</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <Button 
                variant="success" 
                size="lg" 
                className="px-5"
                onClick={addTrip}
              >
                Add Trip
              </Button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}