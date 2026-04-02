const axios = require("axios");

let conversationHistory = [];

exports.handleChat = async (req, res) => {
  const { message } = req.body;

  try {
    conversationHistory.push({ role: "user", content: message });

    const response = await axios.post(
      "https://router.huggingface.co/v1/chat/completions",
      {
        model: "moonshotai/Kimi-K2-Instruct-0905",
        messages: conversationHistory
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    const botReply = response.data.choices[0].message;

    conversationHistory.push(botReply);

    res.json(botReply);

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "AI request failed" });
  }
};