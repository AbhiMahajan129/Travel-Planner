// src/data/pages/PackageDetail.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Alert, Table, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { popularPackages } from '../mockData';

export default function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    const found = popularPackages.find(p => p.id === id);
    setPkg(found || null);
  }, [id]);

  if (!pkg) {
    return (
      <Container className="my-5 text-center">
        <Alert variant="warning">Package not found.</Alert>
        <Button variant="primary" onClick={() => navigate('/packages')}>
          Back to Packages
        </Button>
      </Container>
    );
  }

  return (
    <>
      {/* HERO IMAGE */}
      <div 
        className="position-relative text-white d-flex align-items-center justify-content-center text-center py-5"
        style={{
          backgroundImage: `url(${pkg.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh'
        }}
      >
        <div className="position-relative" style={{ zIndex: 1 }}>
          <Badge bg="primary" className="mb-2">Package</Badge>
          <h1 className="display-3 fw-bold">{pkg.title}</h1>
          <p className="lead">{pkg.duration} Days • {pkg.items.length} Sites</p>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.5 }}></div>
      </div>

      <Container className="my-5">
        <Row className="g-5">
          {/* LEFT: DETAILS */}
          <Col lg={8}>
            {/* PRICE & RATING */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="h3 fw-bold text-primary">Rs. {pkg.price} <small className="text-muted fs-5">/ person</small></h2>
                    <p className="text-muted mb-0">All-inclusive • Taxes included</p>
                  </div>
                  <div className="text-end">
                    <div className="d-flex align-items-center mb-1">
                      <span className="text-warning me-1">Rating</span>
                      <Badge bg="warning" text="dark">{pkg.rating?.toFixed(1)}</Badge>
                    </div>
                    <small className="text-muted">Based on 200+ reviews</small>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* SITES TO VISIT */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-3">Sites You'll Visit ({pkg.duration} Days)</h4>
                <ListGroup variant="flush">
                  {pkg.items.map((site, index) => (
                    <ListGroup.Item key={index} className="d-flex align-items-center py-3 border-bottom">
                      <div 
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div className="fw-semibold">{site}</div>
                        <small className="text-muted">
                          Day {Math.ceil((index + 1) / 2)} • {index % 2 === 0 ? 'Morning' : 'Afternoon'}
                        </small>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

            {/* HOTELS */}
            {pkg.hotels && (
              <Card className="mb-4 border-0 shadow-sm">
                <Card.Body>
                  <h4 className="mb-3">Hotels Included</h4>
                  <Row>
                    {pkg.hotels.map((hotel, i) => (
                      <Col md={6} key={i}>
                        <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-building-fill text-primary me-2"></i>
                          <span>{hotel}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            )}

            {/* RESTAURANTS */}
            {pkg.restaurants && (
              <Card className="mb-4 border-0 shadow-sm">
                <Card.Body>
                  <h4 className="mb-3">Dining Experiences</h4>
                  <Row>
                    {pkg.restaurants.map((rest, i) => (
                      <Col md={6} key={i}>
                        <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-cup-hot-fill text-success me-2"></i>
                          <span>{rest}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            )}

            {/* TRAVEL AGENCY */}
            {pkg.agency && (
              <Card className="mb-4 border-0 shadow-sm">
                <Card.Body>
                  <h4 className="mb-3">Travel Partner</h4>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-briefcase-fill text-info me-2"></i>
                    <span className="fw-medium">{pkg.agency}</span>
                  </div>
                  <small className="text-muted">Expert planning • 24/7 support</small>
                </Card.Body>
              </Card>
            )}

            {/* WHAT'S INCLUDED */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-3">What's Included</h4>
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li className="mb-2">Round-trip flights</li>
                      <li className="mb-2">4-5 star hotel stays</li>
                      <li className="mb-2">Daily breakfast</li>
                      <li className="mb-2">All transfers</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li className="mb-2">Guided tours</li>
                      <li className="mb-2">Entrance fees</li>
                      <li className="mb-2">Travel insurance</li>
                      <li className="mb-2">24/7 concierge</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT: BOOKING CARD */}
          <Col lg={4}>
            <Card className="shadow-sm sticky-top" style={{ top: '100px' }}>
              <Card.Body>
                <h5 className="fw-bold mb-3">Book This Package</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Travelers</Form.Label>
                    <Form.Select defaultValue="1">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>1 Adult + 1 Child</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Departure Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="success" size="lg" className="fw-bold">
                      Book Now • Rs. {pkg.price}
                    </Button>
                  </div>

                  <div className="text-center mt-3">
                    <small className="text-success">
                      Free cancellation up to 48 hours
                    </small>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}