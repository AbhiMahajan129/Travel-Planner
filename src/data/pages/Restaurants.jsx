// src/data/pages/Restaurants.jsx
import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { popularPackages } from '../mockData';

export default function Restaurants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const navigate = useNavigate();

  // Extract all unique restaurants from packages
  const allRestaurants = [];
  const seen = new Set();

  popularPackages.forEach(pkg => {
    if (pkg.restaurants) {
      pkg.restaurants.forEach(rest => {
        if (!seen.has(rest)) {
          seen.add(rest);
          allRestaurants.push({
            id: `restaurant-${rest.toLowerCase().replace(/\s+/g, '-')}`,
            name: rest,
            packageCount: popularPackages.filter(p => p.restaurants?.includes(rest)).length,
            image: pkg.image,
            rating: pkg.rating,
            price: '$$$',
            description: `Dining experience in ${popularPackages.filter(p => p.restaurants?.includes(rest)).length} luxury packages`
          });
        }
      });
    }
  });

  // Sort
  const sortedRestaurants = [...allRestaurants].sort((a, b) => {
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  // Filter
  const filteredRestaurants = sortedRestaurants.filter(rest =>
    rest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* HERO */}
      <div className="py-5">
        <Container>
          <h1 className="display-4 fw-bold text-center">Fine Dining Restaurants</h1>
          <p className="lead text-center mb-0 text-muted">World-class cuisine from our curated travel experiences</p>
        </Container>
      </div>

      {/* CONSISTENT SEARCH BAR */}
      <div 
        className="bg-white shadow-lg rounded-pill p-3 my-4 sticky-top d-flex align-items-center" 
        style={{ 
          top: '80px', 
          zIndex: 1500, 
          maxWidth: '1200px', 
          margin: '0 auto',
          border: '1px solid #dee2e6'
        }}
      >
        <Container className="p-0">
          <Form className="d-flex align-items-center gap-3">
            <InputGroup className="flex-grow-1" style={{ maxWidth: '700px' }}>
              <Form.Control
                type="text"
                placeholder="Search restaurants, cuisines, or cities..."
                className="border-0 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ 
                  fontSize: '1rem', 
                  height: '50px',
                  borderRadius: '50px 0 0 50px'
                }}
              />
              <InputGroup.Text 
                className="bg-transparent border-0"
                style={{ borderRadius: '0 50px 50px 0' }}
              >
                <Button
                  variant="primary"
                  className="rounded-pill d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    padding: 0
                  }}
                >
                  Search
                </Button>
              </InputGroup.Text>
            </InputGroup>

            <Form.Select
              className="rounded-pill"
              style={{ 
                width: '200px', 
                height: '50px',
                fontSize: '0.95rem'
              }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Highest Rated</option>
              <option value="name">A-Z</option>
            </Form.Select>
          </Form>
        </Container>
      </div>

      {/* RESTAURANTS GRID */}
      <Container className="my-5">
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted fs-4">No restaurants found.</p>
          </div>
        ) : (
          <Row className="g-4">
            {filteredRestaurants.map(rest => (
              <Col md={6} lg={4} key={rest.id}>
                <Card
                  className="h-100 shadow-sm border-0 overflow-hidden position-relative"
                  style={{ borderRadius: '16px', cursor: 'pointer' }}
                  onClick={() => navigate(`/restaurants/${rest.id}`)}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundImage: `url(${rest.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(0.75)',
                      zIndex: 0
                    }}
                  />
                  <Card.Body className="position-relative text-white d-flex flex-column justify-content-end" style={{ zIndex: 1, minHeight: '320px' }}>
                    <div>
                      <Card.Title className="h5 mb-1">{rest.name}</Card.Title>
                      <p className="small mb-2">{rest.description}</p>
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-warning me-1">Rating</span>
                        <small>{rest.rating?.toFixed(1)}</small>
                        <span className="ms-2 text-white-50">{rest.price}</span>
                      </div>
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