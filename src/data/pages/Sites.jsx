// src/data/pages/Sites.jsx
import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { popularPackages } from '../mockData';

export default function Sites() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const navigate = useNavigate();

  // Extract all unique sites
  const allSites = [];
  const seen = new Set();

  popularPackages.forEach(pkg => {
    pkg.items.forEach(site => {
      if (!seen.has(site)) {
        seen.add(site);
        allSites.push({
          id: `site-${site.toLowerCase().replace(/\s+/g, '-')}`,
          name: site,
          packageCount: popularPackages.filter(p => p.items.includes(site)).length,
          image: pkg.image,
          popularity: Math.floor(Math.random() * 100) + 50,
          description: `Featured in ${popularPackages.filter(p => p.items.includes(site)).length} luxury packages`
        });
      }
    });
  });

  // Sort
  const sortedSites = [...allSites].sort((a, b) => {
    if (sortBy === 'popularity') return b.popularity - a.popularity;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  // Filter
  const filteredSites = sortedSites.filter(site =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* HERO */}
      <div className="py-5">
        <Container>
          <h1 className="display-4 fw-bold text-center">Explore Destinations</h1>
          <p className="lead text-center mb-0 text-muted">Discover iconic sites from our curated packages</p>
        </Container>
      </div>

      {/* CONSISTENT SEARCH BAR - SAME AS PACKAGES */}
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
                placeholder="Search sites, landmarks, or cities..."
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
              <option value="popularity">Most Popular</option>
              <option value="name">A-Z</option>
            </Form.Select>
          </Form>
        </Container>
      </div>

      {/* SITES GRID */}
      <Container className="my-5">
        {filteredSites.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted fs-4">No sites found.</p>
          </div>
        ) : (
          <Row className="g-4">
            {filteredSites.map(site => (
              <Col md={6} lg={4} key={site.id}>
                <Card
                  className="h-100 shadow-sm border-0 overflow-hidden position-relative"
                  style={{ borderRadius: '16px', cursor: 'pointer' }}
                  onClick={() => navigate(`/sites/${site.id}`)}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundImage: `url(${site.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(0.75)',
                      zIndex: 0
                    }}
                  />
                  <Card.Body className="position-relative text-white d-flex flex-column justify-content-end" style={{ zIndex: 1, minHeight: '320px' }}>
                    <div>
                      <Card.Title className="h5 mb-1">{site.name}</Card.Title>
                      <p className="small mb-2">{site.description}</p>
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-warning me-1">Popularity</span>
                        <small>{site.popularity}%</small>
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