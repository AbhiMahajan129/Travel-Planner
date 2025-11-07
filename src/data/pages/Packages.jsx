// src/data/pages/Packages.jsx
import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { popularPackages } from '../mockData';

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const navigate = useNavigate();

  // SORT LOGIC BASED ON sortBy
  const sortedPackages = [...popularPackages].sort((a, b) => {
    if (sortBy === 'rating') {
      const ratingDiff = (b.rating || 0) - (a.rating || 0);
      if (ratingDiff !== 0) return ratingDiff;
      return b.price - a.price;
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  // FILTER BY SEARCH
  const filteredPackages = sortedPackages.filter(pkg =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      {/* HERO */}
      <div className="bg text-black py-5">
        <Container>
          <h1 className="display-4 fw-bold text-center">All Travel Packages</h1>
          <p className="lead text-center mb-0">Curated luxury experiences • Sorted by rating</p>
        </Container>
      </div>

      {/* OVAL SEARCH BAR */}
      <div className="bg-white shadow-lg rounded-pill p-2 my-4 sticky-top" style={{ top: '80px', zIndex: 1500, maxWidth: '800px', margin: '0 auto' }}>
        <Container className="p-0">
          <Form className="d-flex align-items-center gap-2">
            <InputGroup className="grow">
              <button className="bg-transparent border-0">
                Search
              </button>
              <Form.Control
                type="text"
                placeholder="Search by title or activity..."
                className="border-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>

            <Form.Select
              className="rounded-pill"
              style={{ maxWidth: '180px' }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
            </Form.Select>
          </Form>
        </Container>
      </div>

      {/* PACKAGES GRID */}
      <Container className="my-5">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted fs-4">No packages found.</p>
            <Button variant="outline-primary" onClick={() => setSearchTerm('')}>
              Clear Search
            </Button>
          </div>
        ) : (
          <Row className="g-4">
            {filteredPackages.map(pkg => (
              <Col md={6} lg={4} key={pkg.id}>
                <Card
                  className="h-100 shadow-sm border-0 overflow-hidden position-relative"
                  style={{ borderRadius: '16px', cursor: 'pointer' }}
                  onClick={() => navigate(`/packages/${pkg.id}`)}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundImage: `url(${pkg.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(0.75)',
                      zIndex: 0
                    }}
                  />
                  <Card.Body className="position-relative text-white d-flex flex-column justify-content-end" style={{ zIndex: 1, minHeight: '320px' }}>
                    <div>
                      <Card.Title className="h5 mb-1">{pkg.title}</Card.Title>
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-warning me-1">Rating</span>
                        <small>{pkg.rating?.toFixed(1) || 'N/A'}</small>
                      </div>
                      <p className="mb-2 fs-4 fw-bold">Rs. {pkg.price}/person</p>
                      <ul className="small list-unstyled mb-3 text-white-50">
                        {pkg.items.slice(0, 3).map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                        {pkg.items.length > 3 && <li>• +{pkg.items.length - 3} more</li>}
                      </ul>
                      <Button variant="light" size="sm" className="w-100 fw-bold">
                        View Details
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