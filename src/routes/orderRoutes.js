import express from "express";
import {
  getOrders,
  createOrder,
  deleteOrder,
} from "../controllers/orderController.js";
const orderRoutes = express.Router();

orderRoutes.get("/", getOrders);
orderRoutes.post("/", createOrder);
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;
