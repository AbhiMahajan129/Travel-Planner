// src/assets/components/NavbarComp.jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">TravelPlanner</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* CENTERED LINKS */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#planner">Plan Trip</Nav.Link>
          </Nav>

          {/* RIGHT: Globe + Login */}
          <Nav className="align-items-center">
            <Nav.Link href="#" className="text-primary fs-4 me-3">
              <i className="bi bi-globe"></i>
            </Nav.Link>

            {/* LOGIN BUTTON → REDIRECTS TO /login */}
            <Button as={Link} to="/login" variant="outline-primary" size="sm">
              <i className="bi bi-person me-1"></i> Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}