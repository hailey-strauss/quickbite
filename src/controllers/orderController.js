import Order from "../models/orderModel.js";

export const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

export const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
};

export const deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
};
