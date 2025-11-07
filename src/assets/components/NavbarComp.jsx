import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { useLocation } from "../../hooks/useLocation";
import { useAuth } from "@clerk/clerk-react";

export default function NavbarComp() {
  const { loading, location, error, getLocation } = useLocation();

  // Show alert if there is an error
  useEffect(() => {
    if (error) {
      alert(`Error getting location: ${error}`);
    }
  }, [error]);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    // Prevent multiple script injections
    if (!document.querySelector("#google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
    }

    // Only initialize once
    window.googleTranslateElementInit = () => {
      if (!document.querySelector(".goog-te-gadget")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,as",
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TravelPlanner
        </Navbar.Brand>
        {/* Left: Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-primary">
          TravelPlanner
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* CENTER LINKS */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#planner">Plan Trip</Nav.Link>
          </Nav>

          {/* RIGHT: Location + Login */}
          <Nav className="align-items-center">
            {/* Get Location Button */}
            <Button
              variant="light"
              className="me-2 d-flex justify-content-center align-items-center"
              onClick={getLocation}
              disabled={loading}
              style={{ width: "45px", height: "45px", padding: 0 }}
              title="Get Location"
            >
              {loading ? (
                <Spinner as="span" animation="border" size="sm" />
              ) : (
                <i className="bi bi-globe fs-4"></i>
              )}
            </Button>

            {/* Display coordinates */}
            {location && (
              <span className="me-3">
                {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </span>
            )}

            {/* Login Button */}
            <Button as={Link} to="/login" variant="outline-primary" size="sm">
              <i className="bi bi-person me-1"></i> Login
            </Button>
          </Nav>
          {/* RIGHT SIDE */}
          <Nav className="align-items-center">
            {/* 🌍 Google Translate Dropdown */}
            <div id="google_translate_element" className="me-3"></div>

            {!isSignedIn ? (
              <Button as={Link} to="/login" variant="outline-primary" size="sm">
                <i className="bi bi-person me-1"></i> Login
              </Button>
            ) : (
              <div className="ms-2">
                <UserButton afterSignOutUrl="/login" />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
