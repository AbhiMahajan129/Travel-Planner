import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        bg="success"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>⏰ This toast appears every 5 seconds automatically!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
