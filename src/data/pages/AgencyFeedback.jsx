// src/data/pages/AgencyFeedback.jsx
import { useState } from 'react';
import { Container, Card, Form, Button, ProgressBar, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { popularAgencies } from '../mockData';

export default function AgencyFeedback() {
  const { agencyId } = useParams();
  const navigate = useNavigate();
  
  const agency = popularAgencies.find(a => a.id === agencyId);
  
  const [ratings, setRatings] = useState({
    overall: 0,
    booking: 0,
    support: 0,
    planning: 0,
    accommodation: 0,
    transportation: 0,
    guide: 0,
    value: 0,
    punctuality: 0,
    transparency: 0
  });

  const [hovered, setHovered] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { key: 'overall', label: 'How would you rate your overall experience with the agency?' },
    { key: 'booking', label: 'Was the booking process smooth and transparent?' },
    { key: 'support', label: 'How responsive and helpful was the staff?' },
    { key: 'planning', label: 'Did the itinerary match your expectations?' },
    { key: 'accommodation', label: 'Were the hotels or stays as promised?' },
    { key: 'transportation', label: 'Was the transport comfortable and on time?' },
    { key: 'guide', label: 'Was the guide or representative knowledgeable and courteous?' },
    { key: 'value', label: 'Was the trip worth the price paid?' },
    { key: 'punctuality', label: 'Were schedules followed properly?' },
    { key: 'transparency', label: 'Did the agency clearly explain all charges and inclusions?' }
  ];

  const handleStarClick = (key, value) => {
    setRatings(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Object.values(ratings).reduce((a, b) => a + b, 0);
    if (total < 5) {
      alert('Please rate at least a few items before submitting.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => navigate(`/agencies/${agencyId}`), 3000);
  };

  if (!agency) {
    return (
      <Container className="my-5 text-center">
        <Alert variant="danger">Agency not found.</Alert>
        <Button onClick={() => navigate('/agencies')}>Back to Agencies</Button>
      </Container>
    );
  }

  return (
    <>
      {/* HERO */}
      <div className=" text-black py-5 text-center">
        <Container>
          <h1 className="display-5 fw-bold">Share Your Experience</h1>
          <p className="lead mb-0">Help others by rating your trip with</p>
          <h3 className="mt-2">{agency.name}</h3>
        </Container>
      </div>

      <Container className="my-5">
        <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
          <Card.Body className="p-5">
            {submitted ? (
              <div className="text-center py-5">
                <div className="display-1 text-success mb-3">✔️</div>
                <h3>Thank You!</h3>
                <p className="text-muted">Your feedback has been submitted successfully.</p>
                <ProgressBar animated now={100} className="my-4" style={{ height: '8px' }} />
                <small className="text-muted">Redirecting back to agency profile...</small>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                {questions.map((q, idx) => (
                  <div key={q.key} className="mb-4 p-4 bg-light rounded">
                    <p className="mb-3 fw-medium">
                      {idx + 1}. {q.label}
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      {[1, 2, 3, 4, 5].map(value => {
                        const isFilled = hovered[q.key] ? value <= hovered[q.key] : value <= ratings[q.key];
                        return (
                          <button
                            key={value}
                            type="button"
                            className="btn btn-link p-0 border-0"
                            style={{
                              fontSize: '2rem',
                              lineHeight: 1,
                              color: isFilled ? '#ffc107' : '#ccc',
                              textDecoration: 'none',  // removes underline
                              background: 'none',      // removes button background
                            }}
                            onClick={() => handleStarClick(q.key, value)}
                            onMouseEnter={() => setHovered(prev => ({ ...prev, [q.key]: value }))}
                            onMouseLeave={() => setHovered(prev => ({ ...prev, [q.key]: 0 }))}
                          >
                            {isFilled ? '★' : '☆'}
                          </button>
                        );
                      })}
                    </div>
                    <div className="text-center mt-2">
                      <small className="text-muted">
                        {ratings[q.key] === 0 ? 'Not rated' : `${ratings[q.key]} / 5`}
                      </small>
                    </div>
                  </div>
                ))}

                <div className="d-grid mt-5">
                  <Button
                    type="submit"
                    variant="success"
                    size="lg"
                    className="fw-bold"
                    style={{ borderRadius: '12px' }}
                  >
                    Submit Feedback
                  </Button>
                </div>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    Your review helps improve travel experiences for everyone.
                  </small>
                </div>
              </Form>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
