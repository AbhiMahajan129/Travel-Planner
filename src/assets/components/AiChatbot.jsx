import { useState } from "react";
import { Button, Modal, Form, Spinner, Alert } from "react-bootstrap";

/**
 * 🧭 WanderWiz AI — Standalone Travel Chatbot
 * Works entirely in the frontend using Google Generative AI (Gemini)
 * No Node.js backend required.
 */
export default function AiChatbot() {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi! I'm WanderWiz 🌏 — your travel buddy for North East India! Ask me for suggestions or help planning your trip.",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // 🔑 Replace this with your actual Google API key
  const API_KEY = "AIzaSyCd6-VeksNiydCfRfhDWKZ0uyRD4loHWRM";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `
You are WanderWiz 🌏 — a friendly and enthusiastic AI travel assistant.

**Specialty:** North East India (Assam, Meghalaya, Sikkim, Arunachal Pradesh, Nagaland, etc.)
**Tone:** Cheerful, concise, emoji-friendly.
**Goal:** Suggest destinations, hotels, food, routes, or 3-day itineraries.

User query: ${userInput}
`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Hmm, I couldn’t come up with an answer. Try again!";

      setMessages([...newMessages, { role: "model", text }]);
    } catch (err) {
      console.error("AI Chat Error:", err);
      setError("Sorry, I'm having trouble connecting. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
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
          background: "#ff385c",
          border: "none",
          fontSize: "24px",
        }}
      >
        🤖
      </Button>

      {/* Chat Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Chat with WanderWiz ✈️</Modal.Title>
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
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
        </Modal.Body>

        <Modal.Footer as="form" onSubmit={handleSubmit} className="d-flex">
          <Form.Control
            type="text"
            placeholder="Plan a 3-day trip to Meghalaya..."
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
