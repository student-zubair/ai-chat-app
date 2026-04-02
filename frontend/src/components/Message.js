const Message = ({ text, sender }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: sender === "user" ? "flex-end" : "flex-start",
        margin: "10px 0"
      }}
    >
      <div
        style={{
          background: sender === "user" ? "#007bff" : "#e5e5ea",
          color: sender === "user" ? "#fff" : "#000",
          padding: "10px 15px",
          borderRadius: "15px",
          maxWidth: "60%",
          whiteSpace: "pre-wrap"  // ✅ THIS FIXES IT
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;