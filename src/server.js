import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js"; // Adjust path if needed
import { createServer } from "http";
import { parse } from "url";

dotenv.config();

// Ensure MongoDB is only connected once
let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    isConnected = true;
  }

  const server = createServer(app);

  // Let Express handle the request
  server.emit("request", req, res);
}
