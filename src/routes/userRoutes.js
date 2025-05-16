import express from "express";
import {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

// Register a new user
userRouter.post("/", createUser); // This should handle the POST request to /users

// Login user and get JWT token
userRouter.post("/login", loginUser);

// Delete user by ID
userRouter.delete("/:id", deleteUser);

// Get all users
userRouter.get("/", getUsers); // This should handle the GET request to /users

export default userRouter;
// changed some things
