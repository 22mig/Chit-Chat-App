import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/messageroute.js";
import { app, server } from "./lib/socket.js";
dotenv.config();

app.use(express.json());
const port=process.env.PORT;
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:5174",
      credentials: true,
    })
  );
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
server.listen(port,()=>{
    console.log('server is running on port:',port);
    connectDB();
});

