import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js"; // Assuming app.js is in the same directory

dotenv.config();

// Connect to MongoDB (one-time connection, not starting the server here!)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));
