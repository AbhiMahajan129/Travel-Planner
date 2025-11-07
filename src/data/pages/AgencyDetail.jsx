// src/data/pages/AgencyDetail.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert, ListGroup, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { popularAgencies } from '../mockData';

export default function AgencyDetail() {
  const { agencyId } = useParams();
  const navigate = useNavigate();
  const [agency, setAgency] = useState(null);

  useEffect(() => {
    const found = popularAgencies.find(a => a.id === agencyId);
    setAgency(found || null);
  }, [agencyId]);

  if (!agency) {
    return (
      <Container className="my-5 text-center">
        <Alert variant="warning">Agency not found.</Alert>
        <Button variant="primary" onClick={() => navigate('/agencies')}>
          Back to Agencies
        </Button>
      </Container>
    );
  }

  return (
    <>
      {/* HERO */}
      <div
        className="position-relative text-white d-flex align-items-center justify-content-center text-center py-5"
        style={{
          backgroundImage: `url(${agency.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh'
        }}
      >
        <div className="position-relative" style={{ zIndex: 1 }}>
          <Badge bg="info" className="mb-2 fs-6">Premium Travel Partner</Badge>
          <h1 className="display-3 fw-bold">{agency.name}</h1>
          <p className="lead mb-0">{agency.specialty}</p>
          <p className="mt-2">
            <strong>{agency.destinations}</strong> Destinations Worldwide
          </p>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.5 }}></div>
      </div>

      <Container className="my-5">
        <Row className="g-5">
          {/* LEFT: AGENCY INFO FROM MOCK DATA */}
          <Col lg={8}>
            {/* ABOUT */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-3">About {agency.name}</h4>
                <p className="text-muted lead">{agency.description}</p>
              </Card.Body>
            </Card>

            {/* SERVICES */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-3">Our Signature Services</h4>
                <Row>
                  <Col md={6}>
                    <ListGroup variant="flush">
                      {agency.services.slice(0, Math.ceil(agency.services.length / 2)).map((service, i) => (
                        <ListGroup.Item key={i} className="border-0 py-2 d-flex align-items-start">
                          <span className="text-primary me-2">Checkmark</span>
                          <div>
                            <strong>{service.split(' – ')[0]}</strong>
                            {service.includes(' – ') && (
                              <><br /><small className="text-muted">{service.split(' – ')[1]}</small></>
                            )}
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                  <Col md={6}>
                    <ListGroup variant="flush">
                      {agency.services.slice(Math.ceil(agency.services.length / 2)).map((service, i) => (
                        <ListGroup.Item key={i} className="border-0 py-2 d-flex align-items-start">
                          <span className="text-primary me-2">Checkmark</span>
                          <div>
                            <strong>{service.split(' – ')[0]}</strong>
                            {service.includes(' – ') && (
                              <><br /><small className="text-muted">{service.split(' – ')[1]}</small></>
                            )}
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* TRUST METRICS */}
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-4 text-center">Trusted by Travelers Worldwide</h4>
                <Row className="text-center g-4">
                  <Col>
                    <div className="display-5 fw-bold text-primary">{agency.rating}</div>
                    <p className="small text-muted mb-0">Perfect Rating</p>
                  </Col>
                  <Col>
                    <div className="display-5 fw-bold text-success">{agency.years}+</div>
                    <p className="small text-muted mb-0">Years of Excellence</p>
                  </Col>
                  <Col>
                    <div className="display-5 fw-bold text-info">{agency.destinations}</div>
                    <p className="small text-muted mb-0">Destinations</p>
                  </Col>
                  <Col>
                    <div className="display-5 fw-bold text-warning">{agency.clients}+</div>
                    <p className="small text-muted mb-0">Happy Clients</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT: FEEDBACK BUTTON + INQUIRY */}
          <Col lg={4}>
            {/* GIVE FEEDBACK BUTTON */}
            <Card className="mb-4 shadow-sm">
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mb-3">Share Your Experience</h5>
                <p className="text-muted small mb-3">
                  Help others by rating your trip with {agency.name}
                </p>
                <Button
                  variant="outline-success"
                  size="lg"
                  className="fw-bold w-100"
                  onClick={() => navigate(`/agencies/${agencyId}/feedback`)}
                >
                  Give Feedback
                </Button>
              </Card.Body>
            </Card>

            {/* INQUIRY FORM */}
            <Card className="shadow-sm sticky-top" style={{ top: '100px' }}>
              <Card.Body>
                <h5 className="fw-bold mb-3 text-center">Get Custom Quote</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="you@example.com" />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Dates</Form.Label>
                    <Form.Control type="text" placeholder="e.g. June 2026" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Vision</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Family trip? Adventure? Tell us..." />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" size="lg" className="fw-bold">
                      Request Plan
                    </Button>
                  </div>
                </Form>
                <hr className="my-3" />
                <small className="text-center d-block text-success">
                  Free • Response in 2 hours
                </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}