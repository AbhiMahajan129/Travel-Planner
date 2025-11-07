import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Link, useLocation } from "react-router-dom";
import { useAuth, UserButton } from "@clerk/clerk-react";
import { useLocation as useGeoLocation } from "../../hooks/useLocation";

export default function NavbarComp() {
  const { loading, location, error, getLocation } = useGeoLocation();
  const { isSignedIn } = useAuth();
  const locationPath = useLocation(); // React Router location

  useEffect(() => {
    if (error) {
      alert(`Error getting location: ${error}`);
    }
  }, [error]);

  // Google Translate Script
  useEffect(() => {
    if (!document.querySelector("#google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
    }

    window.googleTranslateElementInit = () => {
      if (!document.querySelector(".goog-te-gadget")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,as",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  // Nav items config
  const navItems = [
    { to: "/", label: "Home", img: "https://images.icon-icons.com/3761/PNG/512/house_building_home_icon_231030.png" },
    { to: "/packages", label: "Packages", img: "https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-package-icon-png-image_3782962.jpg" },
    { to: "/plan-trip", label: "Plan Trip", img: "https://cdn-icons-png.freepik.com/512/6159/6159584.png" },
    { to: "/experiences", label: "Experiences", img: "https://image.pngaaa.com/919/5772919-middle.png" },
  ];

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-primary">
          TravelPlanner
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* CENTER: Nav Links with Icons + Active Underline */}
          <Nav className="mx-auto">
            {navItems.map((item) => {
              const isActive = locationPath.pathname === item.to;
              return (
                <Nav.Link
                  key={item.to}
                  as={Link}
                  to={item.to}
                  className={`d-flex align-items-center gap-2 position-relative px-3 py-2 text-dark fw-medium ${
                    isActive ? "text-primary" : ""
                  }`}
                  style={{
                    transition: "color 0.3s ease",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    style={{
                      width: item.label === "Packages" ? "40px" : "35px",
                      height: "auto",
                      
                      transition: "filter 0.3s ease"
                    }}
                  />
                  {item.label}

                  {/* Grey Underline for Active */}
                  {isActive && (
                    <span
                      className="position-absolute start-0 bottom-0 w-100 bg-secondary"
                      style={{
                        height: "2px",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </Nav.Link>
              );
            })}
          </Nav>

          {/* RIGHT: Location + Translate + Auth */}
          <Nav className="align-items-center gap-2">

            {/* Coordinates */}
            {location && (
              <span className="text-muted small">
                {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </span>
            )}

            {/* Google Translate */}
            <div id="google_translate_element" className="me-2">
              <Button
              variant="light"
              className="d-flex justify-content-center align-items-center"
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
            </div>

            {/* Auth */}
            {!isSignedIn ? (
              <Button as={Link} to="/login" variant="outline-primary" size="sm">
                <i className="bi bi-person me-1"></i> Login
              </Button>
            ) : (
              <UserButton afterSignOutUrl="/login" />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}