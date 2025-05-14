import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

let isConnected = false;

export default async function handler(req, res) {
  try {
    console.log("Incoming request:", req.url);

    if (!isConnected) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log(" MongoDB connected");
      isConnected = true;
    }

    return app(req, res); // Forward the request to your Express app
  } catch (err) {
    console.error(" Handler error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
