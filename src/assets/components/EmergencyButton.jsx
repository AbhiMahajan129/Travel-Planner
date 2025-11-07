import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function EmergencyButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // This function is triggered when the button is clicked
  const handleEmergencyClick = () => {
    handleShow();
    // In a real app, you would also trigger an API call
    // to your backend to notify security.
  };

  return (
    <>
      {/* The Floating Emergency Button */}
      <Button
        onClick={handleEmergencyClick}
        className="rounded-circle d-flex align-items-center justify-content-center shadow"
        style={{
          position: "fixed",
          // 30px (bot bottom) + 60px (bot height) + 10px (spacing) = 100px
          bottom: "100px",
          right: "30px",
          width: "60px",
          height: "60px",
          zIndex: 1001, // Sits on top of the AI bot
          background: "#d90429", // A strong emergency red
          border: "2px solid white",
          fontSize: "28px",
        }}
        aria-label="Emergency Button"
      >
        🚨
      </Button>

      {/* The Confirmation Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title>Emergency Alert Triggered</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fs-5">**Help is on the way.**</p>
          <p>
            Police are being called and security personnel are being informed of
            your location.
          </p>
          <p className="text-muted small">
            Please move to a safe location if possible.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
