# 🤖 AI Chat App

A full-stack AI chatbot application built using React and Node.js, integrated with Hugging Face models and deployed on cloud platforms.

---

## 🌍 Live Demo

👉 https://your-vercel-app.vercel.app

---

## 🚀 Features

* 💬 ChatGPT-like interface
* ⚡ Real-time AI responses
* 🧠 Context-based conversation (memory)
* 🔄 Loading indicator (AI typing...)
* 🧹 Clear chat functionality
* 📱 Responsive UI

---

## 🛠 Tech Stack

### Frontend

* React.js
* JavaScript
* CSS (custom styling)

### Backend

* Node.js
* Express.js

### AI Integration

* Hugging Face Inference API

### DevOps & Deployment

* Docker
* Git & GitHub
* Render (Backend hosting)
* Vercel (Frontend hosting)

---

## 🏗 Project Structure

```
ai-app/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## ⚙️ Run Locally

### 🔹 Backend

```
cd backend
npm install
npm run dev
```

---

### 🔹 Frontend

```
cd frontend
npm install
npm start
```

---

## 🐳 Run with Docker

```
docker compose up --build
```

---

## 🔐 Environment Variables

Create `.env` file inside backend:

```
HF_TOKEN=your_huggingface_token
```

---

## 📡 API Endpoint

```
POST /api/chat
```

### Request Body:

```
{
  "message": "Hello"
}
```

---

## 🧠 How it Works

1. User sends message from frontend
2. React app calls backend API
3. Backend sends request to Hugging Face model
4. AI response is returned to frontend
5. UI updates with response

---

## 🔥 Deployment Architecture

* Frontend → Vercel
* Backend → Render
* AI → Hugging Face

---

## 📌 Future Improvements

* 🔐 User authentication
* 🗄 Chat history storage (MongoDB)
* ⚡ Streaming responses
* 🎨 Enhanced UI (ChatGPT-like)

---

## 👨‍💻 Author

Mohammed Zubair

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
