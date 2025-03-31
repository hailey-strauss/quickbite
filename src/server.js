import express from "express";
import userRoutes from "./routes/userRoutes.js"; // Import your user routes
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user routes under the "/users" endpoint
app.use("/users", userRoutes); // This is important

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error(err));
