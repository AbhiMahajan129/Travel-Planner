// src/data/pages/Experiences.jsx
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { experiences, popularAgencies } from '../mockData';

export default function Experiences() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" text-black py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold">Curated Travel Experiences</h1>
          <p className="lead mb-0">Hand-picked journeys from the world’s best agencies</p>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="g-4">
          {experiences.map(exp => {
            const agency = popularAgencies.find(a => a.id === exp.agencyId);
            return (
              <Col md={6} lg={4} key={exp.id}>
                <Card
                  className="h-100 shadow-sm border-0 overflow-hidden"
                  style={{ borderRadius: '16px', cursor: 'pointer' }}
                  onClick={() => navigate(`/experiences/${exp.id}`)}
                >
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', transition: 'transform .4s' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>

                  <Card.Body className="d-flex flex-column p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Badge bg="info" className="small">{agency?.name || 'Unknown'}</Badge>
                      <div className="text-warning small">Rating {exp.rating} ({exp.reviews})</div>
                    </div>

                    <Card.Title className="h6 fw-bold mb-1">{exp.title}</Card.Title>
                    <p className="text-muted small mb-2">{exp.subtitle}</p>

                    <div className="mt-auto">
                      <div className="d-flex align-items-center text-muted small mb-2">
                        <span>{exp.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.destinations.length} stops</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-primary">{exp.price}</strong>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/experiences/${exp.id}`);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}