// src/pages/RegisterPage.jsx
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 fw-bold">Create Account</h1>
            <p className="text-muted">Join the adventure!</p>
          </div>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                className="border-0 shadow-sm"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="you@example.com"
                className="border-0 shadow-sm"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                className="border-0 shadow-sm"
              />
            </Form.Group>

            <Button variant="success" size="lg" className="w-100 mb-3">
              Sign Up
            </Button>

            <div className="text-center">
              <span className="text-muted">Already have an account? </span>
              <Link to="/login" className="text-primary fw-bold text-decoration-none">
                Sign in
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}