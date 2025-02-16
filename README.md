
# 💬 Real-Time Chat App (MERN + Socket.io)

A real-time chat application built using **MERN (MongoDB, Express, React, Node.js)** and **Socket.io** for instant messaging.

## 🚀 Features
- 🔥 Real-time messaging with **WebSockets**
- 🔒 Secure authentication (JWT)
- 🎨 Modern UI with **React + Tailwind CSS**
- 📂 Media upload with **Cloudinary**
- 🌎 Deployed with **Vercel / Render / Heroku**

## 🛠️ Tech Stack
**Frontend:** React, Tailwind CSS, DaisyUI  
**Backend:** Node.js, Express, Socket.io  
**Database:** MongoDB (Mongoose)  
**Authentication:** JWT (JSON Web Tokens)  
**Storage:** Cloudinary  

## ⚡ Setup & Installation

### 1️⃣ Clone & Navigate
```bash
git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app


Backend Setup
cd backend
npm install

Create .env file and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url

npm start

Frontend Setup


cd frontend
npm install
npm start
React app runs at http://localhost:5174

🚀 Running the App
1️⃣ Start backend (cd backend && npm start)
2️⃣ Start frontend (cd frontend && npm start)
3️⃣ Open http://localhost:5001 and start chatting! 🎉
