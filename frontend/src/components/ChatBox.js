import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../services/api";
import Message from "./Message";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      const res = await sendMessage(input);

      const botMsg = {
        text: res.content,
        sender: "bot"
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    }

    setInput("");
    setLoading(false);
  };

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      
      {/* Header with Clear Chat */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>AI Chat</h2>

        <button
          onClick={() => {
            if (window.confirm("Clear all messages?")) {
              setMessages([]);
            }
          }}
          style={{
            padding: "5px 10px",
            cursor: "pointer"
          }}
        >
          Clear Chat
        </button>
      </div>

      {/* Chat Messages */}
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "10px"
        }}
      >
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} sender={msg.sender} />
        ))}

        {loading && <p>AI is typing...</p>}
        <div ref={chatEndRef} />
      </div>

      {/* Input Section */}
      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          style={{ flex: 1, padding: "10px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />

        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;