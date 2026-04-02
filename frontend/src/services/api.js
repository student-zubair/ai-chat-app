export const sendMessage = async (message) => {
  const response = await fetch("https://ai-backend-llt7.onrender.com/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  return response.json();
};