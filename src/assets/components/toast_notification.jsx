// import React, { useEffect, useState } from 'react';
// import { Toast, ToastContainer } from 'react-bootstrap';

// const ToastNotification = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShow(true);
//       setTimeout(() => setShow(false), 3000);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <ToastContainer position="top-end" className="p-3">
//       <Toast
//         bg="success"
//         onClose={() => setShow(false)}
//         show={show}
//         delay={3000}
//         autohide
//       >
//         <Toast.Header>
//           <strong className="me-auto">Notification</strong>
//           <small>Just now</small>
//         </Toast.Header>
//         <Toast.Body>⏰ This toast appears every 5 seconds automatically!</Toast.Body>
//       </Toast>
//     </ToastContainer>
//   );
// };

// export default ToastNotification;
// 

import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToastNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 3000); // Hide after 3 seconds
    }, 5000); // Show every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <ToastContainer
      className="p-3"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
      }}
    >
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation={true}
        style={{
          backgroundColor: 'white', // Body background
          color: '#dc3545', // Body text color red
          border: '1px solid #dc3545',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        <Toast.Header
          closeButton={true}
          style={{
            backgroundColor: '#dc3545', // Red header
            color: 'white', // Header text white
            borderBottom: '1px solid #dc3545',
          }}
        >
          <strong className="me-auto">⚠ Notification</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>
          ⏰ This toast appears every 5 seconds and stays for 3 seconds!
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;


