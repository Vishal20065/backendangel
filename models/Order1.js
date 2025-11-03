import mongoose from "mongoose";

function toTwoDecimals(num) {
  if (num == null) return num;
  return parseFloat(num.toFixed(2));
}

const order1Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String },
    equity: { type: String },
    price1: { type: Number, set: toTwoDecimals, get: toTwoDecimals },
    price2: { type: Number, set: toTwoDecimals, get: toTwoDecimals },
    price3: { type: String },

    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Allows categories to have subcategories (optional)
        default: null,
      },
  },
  { timestamps: true }
);

export default mongoose.model("Order1", order1Schema);
