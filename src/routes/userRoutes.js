import express from "express";
import {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// Register a new user
router.post("/", createUser); // This should handle the POST request to /users

// Login user and get JWT token
router.post("/login", loginUser);

// Delete user by ID
router.delete("/:id", deleteUser);

// Get all users
router.get("/", getUsers); // This should handle the GET request to /users

export default router;
