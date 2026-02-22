import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Food name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Food type is required"],
      enum: [
        "Street Food",
        "Traditional",
        "Cultural",
        "Snack",
        "Dessert",
        "Main Course",
        "Beverage",
      ],
      trim: true,
    },
    priceCategory: {
      type: String,
      enum: ["Budget", "Affordable", "Moderate", "Expensive"],
      default: "Moderate",
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    currency: {
      type: String,
      default: "NPR",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Index for better query performance
foodSchema.index({ type: 1, isActive: 1 });
foodSchema.index({ name: "text", description: "text" });

const Food = mongoose.model("Food", foodSchema);

export default Food;
