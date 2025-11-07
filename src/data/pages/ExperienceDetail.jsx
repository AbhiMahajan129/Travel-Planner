// src/data/pages/ExperienceDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Alert, ListGroup } from 'react-bootstrap';
import { experiences, popularAgencies } from '../mockData';

export default function ExperienceDetail() {
  const { experienceId } = useParams();
  const navigate = useNavigate();

  const experience = experiences.find(e => e.id === experienceId);
  const agency = experience ? popularAgencies.find(a => a.id === experience.agencyId) : null;

  if (!experience || !agency) {
    return (
      <Container className="my-5 text-center">
        <Alert variant="warning">Experience not found.</Alert>
        <Button variant="primary" onClick={() => navigate('/experiences')}>
          Back to Experiences
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
          backgroundImage: `url(${experience.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '65vh'
        }}
      >
        <div className="position-relative" style={{ zIndex: 1, maxWidth: '800px' }}>
          <Badge bg="success" className="mb-3 fs-6">Featured Experience</Badge>
          <h1 className="display-3 fw-bold">{experience.title}</h1>
          <p className="lead mb-2">{experience.subtitle}</p>
          <p className="fs-5 mb-0">by <strong>{agency.name}</strong></p>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.6 }}></div>
      </div>

      <Container className="my-5">
        <Row className="g-5">
          {/* LEFT: DETAILS */}
          <Col lg={8}>
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-3">Overview</h4>
                <p className="text-muted lead">{experience.overview}</p>
              </Card.Body>
            </Card>

            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-3">What's Included</h4>
                <Row>
                  {experience.includes.map((item, i) => (
                    <Col md={6} key={i}>
                      <ListGroup.Item className="border-0 py-2 d-flex align-items-center">
                        <span className="text-success me-2">Checkmark</span>
                        {item}
                      </ListGroup.Item>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-3">Trip Highlights</h4>
                <Row>
                  {experience.highlights.map((h, i) => (
                    <Col md={6} key={i}>
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-primary me-2">Star</span>
                        <span>{h}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT: BOOKING */}
          <Col lg={4}>
            <Card className="shadow-sm sticky-top" style={{ top: '100px' }}>
              <Card.Body>
                <div className="text-center mb-4">
                  <div className="display-5 fw-bold text-primary">{experience.price}</div>
                  <small className="text-muted">per person</small>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between small text-muted">
                    <span>Duration</span>
                    <strong>{experience.duration}</strong>
                  </div>
                  <div className="d-flex justify-content-between small text-muted">
                    <span>Destinations</span>
                    <strong>{experience.destinations.length}</strong>
                  </div>
                  <div className="d-flex justify-content-between small text-muted">
                    <span>Rating</span>
                    <strong className="text-warning">Rating {experience.rating} ({experience.reviews} reviews)</strong>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 fw-bold mb-3"
                  onClick={() => navigate(`/agencies/${agency.id}`)}
                >
                  Inquire Now
                </Button>

                <Button
                  variant="outline-secondary"
                  className="w-100"
                  onClick={() => navigate('/experiences')}
                >
                  View All Experiences
                </Button>

                <hr className="my-4" />

                <div className="text-center">
                  <small className="text-success d-block">Free cancellation up to 30 days</small>
                  <small className="text-success d-block">Expert local guides</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}