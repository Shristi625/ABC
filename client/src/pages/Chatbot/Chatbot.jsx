import React, { useState } from "react";
import "./Chatbot.css";
import { sendMessage } from "../../services/chat";

const SUGGESTED_QUESTIONS = [
  "Ask me about best sunrise spots",
  "Cold destinations in Nepal",
  "Hidden gems off the beaten path",
  "Best time to visit Pokhara",
  "Tea garden destinations",
  "Short hikes from Kathmandu",
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 I'm your Travel Assistant! Ask me about places, routes, or tips. Try one of the suggestions below or type your own question.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async (text) => {
    const messageText = text || input;
    if (!messageText?.trim()) return;

    const userMessage = { from: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Show loading message
    const loadingMessage = {
      from: "bot",
      text: "✨ Thinking...",
      loading: true,
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const response = await sendMessage(messageText);

      // Remove loading message and add actual response
      setMessages((prev) => [
        ...prev.filter((msg) => !msg.loading),
        {
          from: "bot",
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      // Remove loading message and show error
      setMessages((prev) => [
        ...prev.filter((msg) => !msg.loading),
        {
          from: "bot",
          text: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
      console.error("Chat error:", error);
    }
  };

  const handleSuggestedClick = (q) => {
    handleSend(q);
  };

  return (
    <div className="chatbot">
      {open && (
        <div className="chatbot__window">
          <div className="chatbot__header">
            <div className="chatbot__header-info">
              <span className="chatbot__avatar">✈</span>
              <div>
                <span className="chatbot__title">Travel Assistant</span>
                <span className="chatbot__status">Online</span>
              </div>
            </div>
            <button
              className="chatbot__close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chatbot__messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot__message chatbot__message--${msg.from}`}
              >
                {msg.text}
              </div>
            ))}
            {messages.length <= 1 && (
              <div className="chatbot__suggestions">
                <p className="chatbot__suggestions-title">
                  Suggested questions:
                </p>
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    className="chatbot__suggestion"
                    onClick={() => handleSuggestedClick(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chatbot__input-wrap">
            <input
              type="text"
              placeholder="Ask about Nagarkot, Bandipur..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="chatbot__input"
            />
            <button
              className="chatbot__send"
              onClick={() => handleSend()}
              aria-label="Send"
            >
              →
            </button>
          </div>
        </div>
      )}

      <button
        className="chatbot__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
      >
        <span className="chatbot__toggle-icon">✈</span>
      </button>
    </div>
  );
};

export default Chatbot;
