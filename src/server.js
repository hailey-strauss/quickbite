import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    isConnected = true;
  }

  return app(req, res); // Just forward the request to Express
}
