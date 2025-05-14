import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "../src/app.js"; // Adjust path as needed
import { createServer } from "http";

dotenv.config();

let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    isConnected = true;
  }

  const server = createServer(app);
  server.emit("request", req, res);
}
