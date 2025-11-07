// src/data/pages/Home.jsx
import { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Form,
} from "react-bootstrap";
// Removed 'useNavigate' and only keeping 'Link'
import { Link } from "react-router-dom";
import {
  popularPackages,
  destinations,
  popularSites,
  popularHotels,
  popularAgencies,
} from "../mockData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  // Removed useNavigate initialization

  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(null);

  const [siteIndex, setSiteIndex] = useState(0);
  const [hotelIndex, setHotelIndex] = useState(0);
  const [agencyIndex, setAgencyIndex] = useState(0);

  const scrollSection = (section, delta) => {
    if (section === "sites")
      setSiteIndex((prev) =>
        Math.max(0, Math.min(prev + delta, popularSites.length - 5))
      );
    if (section === "hotels")
      setHotelIndex((prev) =>
        Math.max(0, Math.min(prev + delta, popularHotels.length - 5))
      );
    if (section === "agencies")
      setAgencyIndex((prev) =>
        Math.max(0, Math.min(prev + delta, popularAgencies.length - 5))
      );
  };

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showGuests, setShowGuests] = useState(false);
  const [destination, setDestination] = useState(""); // State for destination input

  const totalGuests = adults + children + infants;

  const calendarRef = useRef(null);
  const guestsRef = useRef(null);

  const [scrollIndex, setScrollIndex] = useState(0);
  const packagesPerPage = 5; // Show 5 at a time

  // Sorted packages (base list)
  const sortedPackages = [...popularPackages].sort(
    (a, b) => (b.rating || 0) - (a.rating || 0)
  );

  // NEW STATE: Filtered list for display
  const [filteredPackages, setFilteredPackages] = useState(sortedPackages);

  // Reset scroll index whenever filtered packages change
  useEffect(() => {
    setScrollIndex(0);
  }, [filteredPackages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(null);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setShowGuests(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * MODIFIED: Filters packages based on the destination input.
   * NOTE: For a full solution, you would also filter by dates, guests, etc.
   */
  const handleSearch = () => {
    const query = destination.toLowerCase().trim();

    if (!query) {
      // If the search box is empty, show all packages
      setFilteredPackages(sortedPackages);
      return;
    }

    const results = sortedPackages.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(query) ||
        (pkg.items &&
          pkg.items.some((item) => item.toLowerCase().includes(query)))
      // Assuming packages have a 'location' or 'destination' property you could check
      // OR, simply check if the destination name is included in the package title
    );

    setFilteredPackages(results);

    // Optional: Log the search action
    console.log(`Searching for packages matching: "${destination}"`);
  };

  const scrollLeft = () => {
    setScrollIndex(Math.max(0, scrollIndex - packagesPerPage));
  };

  const scrollRight = () => {
    setScrollIndex(
      Math.min(
        filteredPackages.length - packagesPerPage, // Use filteredPackages length
        scrollIndex + packagesPerPage
      )
    );
  };

  // Use the filtered list for visualization
  const visiblePackages = filteredPackages.slice(
    scrollIndex,
    scrollIndex + packagesPerPage
  );

  return (
    <>
      {/* IMAGE CAROUSEL */}
      <Carousel className="mb-5" indicators={false}>
        {destinations.slice(0, 3).map((dest) => (
          <Carousel.Item key={dest.id}>
            <div className="position-relative">
              <img
                className="d-block w-100"
                src={dest.image}
                alt={dest.name}
                style={{
                  height: "60vh",
                  objectFit: "cover",
                  filter: "brightness(70%)",
                }}
              />
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="display-3 fw-bold">{dest.name}</h1>
                <p className="lead">{dest.description}</p>
                <Button
                  as={Link}
                  to={`/destinations/${dest.id}`}
                  variant="light"
                  size="lg"
                >
                  Explore Now
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* SEARCH BAR */}
      <div
        className="bg-white shadow-lg rounded-pill p-2 mb-5 sticky-top d-flex align-items-center"
        style={{
          top: "70px",
          zIndex: 1000,
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Container className="p-0">
          <Form className="d-flex align-items-center">
            <div className="glow d-flex">
              {/* WHERE */}
              <div className="border-end px-3 py-2 glow">
                <small className="text-muted d-block">Where</small>
                {/* MODIFICATION: Added value, onChange, and onKeyDown for search */}
                <Form.Control
                  type="text"
                  placeholder="Search destinations"
                  className="border-0 p-0"
                  style={{ fontSize: "0.95rem", fontWeight: "500" }}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSearch();
                    }
                  }}
                />
              </div>

              {/* CHECK IN */}
              <div
                ref={showCalendar === "checkin" ? calendarRef : null}
                className="border-end px-3 py-2 position-relative"
                style={{ minWidth: "140px" }}
              >
                <small className="text-muted d-block">Check in</small>
                <div
                  className="text-truncate"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowCalendar("checkin")}
                >
                  {arrivalDate
                    ? arrivalDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    : "Add dates"}
                </div>
                {showCalendar === "checkin" && (
                  <div
                    className="position-absolute top-100 start-0 mt-2 shadow-lg bg-white rounded"
                    style={{ zIndex: 2000 }}
                  >
                    <DatePicker
                      selected={arrivalDate}
                      onChange={(date) => {
                        setArrivalDate(date);
                        setShowCalendar(null);
                      }}
                      selectsStart
                      startDate={arrivalDate}
                      endDate={departureDate}
                      minDate={new Date()}
                      inline
                    />
                  </div>
                )}
              </div>

              {/* CHECK OUT */}
              <div
                ref={showCalendar === "checkout" ? calendarRef : null}
                className="border-end px-3 py-2 position-relative"
                style={{ minWidth: "140px" }}
              >
                <small className="text-muted d-block">Check out</small>
                <div
                  className="text-truncate"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowCalendar("checkout")}
                >
                  {departureDate
                    ? departureDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    : "Add dates"}
                </div>
                {showCalendar === "checkout" && (
                  <div
                    className="position-absolute top-100 start-0 mt-2 shadow-lg bg-white rounded"
                    style={{ zIndex: 2000 }}
                  >
                    <DatePicker
                      selected={departureDate}
                      onChange={(date) => {
                        setDepartureDate(date);
                        setShowCalendar(null);
                      }}
                      selectsEnd
                      startDate={arrivalDate}
                      endDate={departureDate}
                      minDate={arrivalDate || new Date()}
                      inline
                    />
                  </div>
                )}
              </div>

              {/* WHO + GUEST COUNTER */}
              <div
                ref={guestsRef}
                className="px-3 py-2 position-relative"
                style={{ minWidth: "180px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowGuests(!showGuests)}
                >
                  <div>
                    <small className="text-muted d-block">Who</small>
                    <span style={{ fontSize: "0.95rem", fontWeight: "500" }}>
                      {totalGuests === 0
                        ? "Add guests"
                        : `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`}
                    </span>
                  </div>
                  <Button
                    className="rounded-circle d-flex align-items-center justify-content-center ms-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#ff385c",
                      border: "none",
                    }}
                    // MODIFICATION: Call handleSearch
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSearch(); // 👈 Search function called here
                    }}
                  >
                    <i className="bi bi-search text-white"></i>
                  </Button>
                </div>

                {/* GUEST COUNTER POPUP */}
                {showGuests && (
                  <div
                    className="position-absolute top-100 end-0 mt-2 bg-white shadow-lg rounded p-3"
                    style={{ width: "320px", zIndex: 2000 }}
                  >
                    {/* Adults */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <div className="fw-bold">Adults</div>
                        <small className="text-muted">Ages 13 or above</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                        >
                          −
                        </Button>
                        <span className="mx-3 fw-bold">{adults}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setAdults(adults + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <div className="fw-bold">Children</div>
                        <small className="text-muted">Ages 2–12</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                        >
                          −
                        </Button>
                        <span className="mx-3 fw-bold">{children}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Infants */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold">Infants</div>
                        <small className="text-muted">Under 2</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setInfants(Math.max(0, infants - 1))}
                        >
                          −
                        </Button>
                        <span className="mx-3 fw-bold">{infants}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setInfants(infants + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Form>
        </Container>
      </div>

      {/* MAIN CONTENT */}
      <Container className="my-5">
        {/* POPULAR PACKAGES - Now using filteredPackages */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="h3 fw-bold mb-0">
              {destination
                ? `Search Results for "${destination}"`
                : "Popular Packages"}
              {filteredPackages.length === 0 && (
                <span className="text-danger ms-3 h6">(No packages found)</span>
              )}
            </h2>
            <Link
              to="/packages"
              className="text-primary fw-bold text-decoration-none"
            >
              See All
            </Link>
          </div>
          <div className="position-relative">
            <Button
              variant="light"
              className="position-absolute start-0 top-50 translate-middle-y shadow rounded-circle"
              style={{ zIndex: 10, width: "50px", height: "50px" }}
              onClick={scrollLeft}
              // Disabled if we're at the start or if there aren't enough packages to scroll
              disabled={
                scrollIndex === 0 || filteredPackages.length <= packagesPerPage
              }
            >
              <i className="bi bi-chevron-left fs-4"></i>
            </Button>
            <Button
              variant="light"
              className="position-absolute end-0 top-50 translate-middle-y shadow rounded-circle"
              style={{ zIndex: 10, width: "50px", height: "50px" }}
              onClick={scrollRight}
              // Disabled if we're at the end or if there aren't enough packages to scroll
              disabled={
                scrollIndex >= filteredPackages.length - packagesPerPage ||
                filteredPackages.length <= packagesPerPage
              }
            >
              <i className="bi bi-chevron-right fs-4"></i>
            </Button>

            <div
              className="d-flex gap-4 overflow-hidden"
              style={{ scrollBehavior: "smooth" }}
            >
              {/* Using visiblePackages (derived from filteredPackages) */}
              {visiblePackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className="shrink-0 shadow-sm position-relative overflow-hidden"
                  style={{ width: "320px", borderRadius: "16px" }}
                >
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="text-decoration-none text-white"
                  >
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        backgroundImage: `url(${pkg.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.7)",
                        zIndex: 0,
                      }}
                    />
                    <div
                      className="position-relative p-4"
                      style={{ zIndex: 1 }}
                    >
                      <Card.Title className="h5 mb-1">{pkg.title}</Card.Title>
                      {pkg.rating && (
                        <div className="d-flex align-items-center mb-2">
                          <span className="text-warning me-1">★★★★★</span>
                          <small>{pkg.rating.toFixed(1)}</small>
                        </div>
                      )}
                      <Card.Text className="mb-3">
                        <strong className="fs-3">Rs. {pkg.price}</strong>
                        <span className="small ms-1 text-white-50">
                          /person
                        </span>
                      </Card.Text>
                      <ul
                        className="small mb-3 text-white-50"
                        style={{ opacity: 0.9 }}
                      >
                        {pkg.items.slice(0, 3).map((it, i) => (
                          <li key={i}>{it}</li>
                        ))}
                        {pkg.items.length > 3 && (
                          <li>+ {pkg.items.length - 3} more</li>
                        )}
                      </ul>
                      <Button
                        variant="light"
                        size="sm"
                        className="w-100 fw-bold"
                      >
                        Book Now
                      </Button>
                    </div>
                  </Link>
                </Card>
              ))}
              {/* Display a message if no packages are found */}
              {filteredPackages.length === 0 && (
                <Col className="p-4">
                  <p className="lead text-muted">
                    No packages match your search criteria.
                  </p>
                </Col>
              )}
            </div>
          </div>
        </div>

        {/* POPULAR SITES - Unchanged */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="h3 fw-bold mb-0">Popular Places to Visit</h2>
            <Link
              to="/sites"
              className="text-primary fw-bold text-decoration-none"
            >
              See More
            </Link>
          </div>
          <div className="position-relative">
            <Button
              variant="light"
              className="position-absolute start-0 top-50 translate-middle-y shadow rounded-circle"
              style={{ zIndex: 10, width: "50px", height: "50px" }}
              onClick={() => scrollSection("sites", -5)}
              disabled={siteIndex === 0}
            >
              <i className="bi bi-chevron-left fs-4"></i>
            </Button>
            <Button
              variant="light"
              className="position-absolute end-0 top-50 translate-middle-y shadow rounded-circle"
              style={{ zIndex: 10, width: "50px", height: "50px" }}
              onClick={() => scrollSection("sites", 5)}
              disabled={siteIndex >= popularSites.length - 5}
            >
              <i className="bi bi-chevron-right fs-4"></i>
            </Button>
            <div
              className="d-flex gap-4 overflow-hidden"
              style={{ scrollBehavior: "smooth" }}
            >
              {popularSites.slice(siteIndex, siteIndex + 5).map((site) => (
                <Card
                  key={site.id}
                  className="shrink-0 shadow-sm position-relative overflow-hidden"
                  style={{ width: "300px", borderRadius: "16px" }}
                >
                  <Link
                    to={`/site/${site.id}`}
                    className="text-decoration-none text-white"
                  >
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        backgroundImage: `url(${site.image})`,
                        backgroundSize: "cover",
                        filter: "brightness(0.7)",
                        zIndex: 0,
                      }}
                    />
                    <div
                      className="position-relative p-4"
                      style={{ zIndex: 1 }}
                    >
                      <Card.Title className="h5 mb-1">{site.name}</Card.Title>
                      <small className="d-block mb-2">{site.location}</small>
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-warning me-1">★★★★★</span>
                        <small>{site.rating}</small>
                      </div>
                      <p className="small mb-2">{site.description}</p>
                      <Button
                        variant="light"
                        size="sm"
                        className="w-100 fw-bold"
                      >
                        Explore
                      </Button>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* POPULAR HOTELS - Unchanged */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="h3 fw-bold mb-0">Top Hotels</h2>
            <Link
              to="/hotels"
              className="text-primary fw-bold text-decoration-none"
            >
              See More
            </Link>
          </div>
          <div className="d-flex gap-4 overflow-hidden">
            {popularHotels.slice(hotelIndex, hotelIndex + 5).map((hotel) => (
              <Card
                key={hotel.id}
                className="shrink-0 shadow-sm position-relative overflow-hidden"
                style={{ width: "300px", borderRadius: "16px" }}
              >
                <Link
                  to={`/hotel/${hotel.id}`}
                  className="text-decoration-none text-white"
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundImage: `url(${hotel.image})`,
                      backgroundSize: "cover",
                      filter: "brightness(0.7)",
                      zIndex: 0,
                    }}
                  />
                  <div className="position-relative p-4" style={{ zIndex: 1 }}>
                    <Card.Title className="h5 mb-1">{hotel.name}</Card.Title>
                    <small className="d-block mb-2">{hotel.location}</small>
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning me-1">★★★★★</span>
                      <small>{hotel.rating}</small>
                      <span className="badge bg-light text-dark ms-2">
                        {hotel.type}
                      </span>
                    </div>
                    <p className="mb-2 fs-5 fw-bold">Rs. {hotel.price}/night</p>
                    <Button variant="light" size="sm" className="w-100 fw-bold">
                      Book Now
                    </Button>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* POPULAR AGENCIES - Unchanged */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="h3 fw-bold mb-0">Top Travel Agencies</h2>
            <Link
              to="/agencies"
              className="text-primary fw-bold text-decoration-none"
            >
              See More
            </Link>
          </div>
          <div className="d-flex gap-4 overflow-hidden">
            {popularAgencies
              .slice(agencyIndex, agencyIndex + 5)
              .map((agency) => (
                <Card
                  key={agency.id}
                  className="shrink-0 shadow-sm position-relative overflow-hidden"
                  style={{ width: "300px", borderRadius: "16px" }}
                >
                  <Link
                    to={`/agencies/${agency.id}`}
                    className="text-decoration-none text-white"
                  >
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        backgroundImage: `url(${agency.image})`,
                        backgroundSize: "cover",
                        filter: "brightness(0.7)",
                        zIndex: 0,
                      }}
                    />
                    <div
                      className="position-relative p-4"
                      style={{ zIndex: 1 }}
                    >
                      <Card.Title className="h5 mb-1">{agency.name}</Card.Title>
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-warning me-1">★★★★★</span>
                        <small>{agency.rating}</small>
                      </div>
                      <p className="small mb-1">{agency.specialty}</p>
                      <p className="small mb-3">
                        {agency.destinations} Destinations
                      </p>
                      <Button
                        variant="light"
                        size="sm"
                        className="w-100 fw-bold"
                      >
                        Contact
                      </Button>
                    </div>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}
