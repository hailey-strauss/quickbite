// // src/config/db.js
// import mongoose from "mongoose";

// let isConnected = false;

// // const connectDB = async () => {
// //   if (isConnected) {
// //     return;
// //   }

// //   try {
// //     const conn = await mongoose.connect(process.env.MONGO_URI, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //     isConnected = true;
// //     console.log(`MongoDB connected: ${conn.connection.host}`);
// //   } catch (error) {
// //     console.error("MongoDB connection error:", error.message);
// //     throw new Error("Failed to connect to MongoDB");
// //   }
// // };
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI); // No need for options now
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
