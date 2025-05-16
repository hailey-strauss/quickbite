import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

//let isConnected = false;

// export async function connectDB() {
//   try {

//     // if (!isConnected) {
//     await mongoose.connect(process.env.MONGO_URI, {
//     });
//     console.log(" MongoDB connected");
//     //isConnected = true;
//     //}

//     // return app(req, res); // Forward to Express app
//   } catch (err) {
//     console.error(" Server error:", err);
//     //res.statusCode = 500;
//     //res.end("Internal Server Error");
//   }
// }

// await connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
