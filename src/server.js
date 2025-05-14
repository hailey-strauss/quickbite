import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

//let isConnected = false;

export default async function handler(req, res) {
  try {
    console.log("Incoming request:", req);

    // if (!isConnected) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB connected");
    //isConnected = true;
    //}

    // return app(req, res); // Forward to Express app
  } catch (err) {
    console.error(" Server error:", err);
    //res.statusCode = 500;
    //res.end("Internal Server Error");
  }
}
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running on port ${process.env.PORT}`);
  handler(req, res);
});
