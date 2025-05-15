import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      quantity: Number,
    },
  ],
  total: Number,
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
