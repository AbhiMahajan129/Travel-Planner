import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// --- ARUNACHAL PRADESH GUIDELINES ---
const ARUNACHAL_GUIDELINE = {
  title: "🔴 MANDATORY: Arunachal Pradesh ILP",
  style: "danger", // Use danger style for critical information
  message: `
  ⚠️ MUST DO: Inner Line Permit (ILP)
  
  The ILP is required for all domestic visitors entering the state. You must secure this document online BEFORE traveling.

  ❌ MUST NOT: Travel without the ILP.

  ✅ MUST DO: Carry warm clothes. Most popular areas (like Tawang) are high altitude and require extra layers, even in summer.
  `,
};
// ------------------------------------

const ToastNotification = () => {
  const [show, setShow] = useState(false);

  // Use useEffect to show the notification immediately on load
  useEffect(() => {
    const hasSeenGuide = sessionStorage.getItem("ArunachalGuideShown");

    // Only show the critical guide once per browser session
    if (!hasSeenGuide) {
      setShow(true);
      // Set a timer to automatically hide the critical message after 15 seconds
      const timer = setTimeout(() => setShow(false), 15000);
      sessionStorage.setItem("ArunachalGuideShown", "true");
      return () => clearTimeout(timer);
    }
  }, []);

  // Set colors based on the defined style (danger)
  const styles = {
    danger: { bg: "#dc3545", text: "#dc3545" },
  };
  const currentStyle = styles[ARUNACHAL_GUIDELINE.style];

  return (
    <ToastContainer
      className="p-3"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={15000} // Autohide after 15 seconds
        autohide
        animation={true}
        style={{
          backgroundColor: "white",
          color: currentStyle.text,
          border: `1px solid ${currentStyle.bg}`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          minWidth: "400px", // Wider to fit the text
        }}
      >
        <Toast.Header
          closeButton={true}
          style={{
            backgroundColor: currentStyle.bg,
            color: "white",
            borderBottom: `1px solid ${currentStyle.bg}`,
          }}
        >
          <strong className="me-auto">{ARUNACHAL_GUIDELINE.title}</strong>
          <small>Travel Advisory</small>
        </Toast.Header>
        <Toast.Body style={{ whiteSpace: "pre-wrap" }}>
          {ARUNACHAL_GUIDELINE.message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
