import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    clientId: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },

    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Allows categories to have subcategories (optional)
        default: null,
      },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
