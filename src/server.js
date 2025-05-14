// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import app from "./app.js"; // Assuming app.js is in the same directory

// dotenv.config();

// // Connect to MongoDB (one-time connection, not starting the server here!)
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));

// // No PORT listening here
// // Because Vercel automatically handles starting the app when it's exported

// export default app;
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/restaurants", restaurantRoutes);
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
