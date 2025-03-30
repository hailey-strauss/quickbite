import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  items: [{ name: String, quantity: Number, price: Number }],
  total: { type: Number, required: true },
  status: { type: String, default: "Pending" },
});

export default mongoose.model("Order", orderSchema);
