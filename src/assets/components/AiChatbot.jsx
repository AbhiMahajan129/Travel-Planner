import { useState } from "react";
import { Button, Modal, Form, Spinner, Alert } from "react-bootstrap";

export default function AiChatbot() {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi! I'm WanderWiz. Ask me for travel suggestions or help!",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    setIsLoading(true);
    setError(null);

    try {
      // This fetches from your backend's /api/ask-ai endpoint
      const res = await fetch("/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userInput }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong with the AI response.");
      }

      const data = await res.json();
      setMessages([...newMessages, { role: "model", text: data.response }]);
    } catch (err) {
      setError(err.message);
      // Revert to messages before the error, so the user can see their last message
      setMessages(newMessages);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* The Floating Button */}
      <Button
        onClick={handleShow}
        className="rounded-circle d-flex align-items-center justify-content-center shadow"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          zIndex: 1000,
          background: "#ff385c", // Example color
          border: "none",
          fontSize: "24px",
        }}
      >
        {/* You can use a Bootstrap Icon here if you have it installed */}
        🤖
      </Button>

      {/* The Chat Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Chat with WanderWiz</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "400px", overflowY: "auto" }}>
          <div className="d-flex flex-column gap-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded ${
                  msg.role === "user"
                    ? "bg-primary text-white align-self-end"
                    : "bg-light text-dark align-self-start"
                }`}
                style={{ maxWidth: "85%", whiteSpace: "pre-wrap" }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="align-self-start d-flex align-items-center gap-2 text-muted">
                <Spinner animation="border" size="sm" /> Typing...
              </div>
            )}
            {error && (
              <Alert variant="danger">
                Sorry, I'm having trouble connecting. Please try again later.
              </Alert>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer as="form" onSubmit={handleSubmit} className="d-flex">
          <Form.Control
            type="text"
            placeholder="Suggest a 3-day trip to Paris..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isLoading}
            className="flex-grow-1"
          />
          <Button variant="primary" type="submit" disabled={isLoading}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
