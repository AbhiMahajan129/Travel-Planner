// src/pages/LoginPage.jsx
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 fw-bold">Welcome Back!</h1>
            <p className="text-muted">Sign in to plan your next adventure</p>
          </div>

          <Form>
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
                placeholder="••••••••"
                className="border-0 shadow-sm"
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check type="checkbox" label="Remember me" />
              <Link to="#" className="text-decoration-none small text-primary">
                Forgot password?
              </Link>
            </div>

            <Button variant="primary" size="lg" className="w-100 mb-3">
              Sign In
            </Button>

            <div className="text-center">
              <span className="text-muted">Don't have an account? </span>
              <Link to="/register" className="text-primary fw-bold text-decoration-none">
                Sign up
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}