import express from "express";
import {
  getRestaurants,
  createRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantController.js";
const router = express.Router();

router.get("/", getRestaurants);
router.post("/", createRestaurant);
router.delete("/:id", deleteRestaurant);

export default router;
