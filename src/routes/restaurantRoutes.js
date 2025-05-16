import express from "express";
import {
  getRestaurants,
  createRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantController.js";
const restaurantRoutes = express.Router();

restaurantRoutes.get("/", getRestaurants);
restaurantRoutes.post("/", createRestaurant);
restaurantRoutes.delete("/:id", deleteRestaurant);

export default restaurantRoutes;
