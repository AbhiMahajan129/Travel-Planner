// src/data/pages/MyTrips.jsx
import { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('myTrips');
    if (data) setTrips(JSON.parse(data));
  }, []);

  const removeTrip = (id) => {
    const updated = trips.filter(t => t.id !== id);
    setTrips(updated);
    localStorage.setItem('myTrips', JSON.stringify(updated));
  };

  return (
    <>
      <div className="bg-light py-5">
        <Container>
          <h1 className="display-5 fw-bold text-center">My Saved Trips</h1>
        </Container>
      </div>

      <Container className="my-5">
        {trips.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted">No trips saved yet.</p>
            <Button as={Link} to="/plan-trip/form" variant="primary">
              Create Your First Trip
            </Button>
          </div>
        ) : (
          <Row className="g-4">
            {trips.map(trip => (
              <Col md={6} lg={4} key={trip.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <h5 className="card-title">{trip.planName}</h5>
                    <p className="small text-muted mb-2">
                      {trip.arrivalLocation} → {trip.departureLocation}
                    </p>
                    <Badge bg="secondary" className="mb-2">
                      {trip.sites.length} sites
                    </Badge>
                    <div className="mt-3 d-flex gap-2">
                      <Button size="sm" variant="outline-primary" as={Link} to="/plan-trip">
                        View
                      </Button>
                      <Button size="sm" variant="outline-danger" onClick={() => removeTrip(trip.id)}>
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
