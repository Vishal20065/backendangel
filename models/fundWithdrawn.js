import mongoose from "mongoose";

const fundWithdrawnSchema = new mongoose.Schema(
  {
    name: { type: String },
    account: { type: String },
    price: { type: Number },
    date: { type: String },
    status: {
      type: String,
      enum: ["APPROVED", "CANCELLED"],
      default: "APPROVED",
    },

    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Allows categories to have subcategories (optional)
        default: null,
      },
  },
  { timestamps: true }
);

export default mongoose.model("FundWithDraw", fundWithdrawnSchema);
