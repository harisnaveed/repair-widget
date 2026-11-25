import mongoose from "mongoose";

const deviceBrandSchema = new mongoose.Schema(
  {
    device: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Device",
      required: [true, "Device reference is required"],
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: [true, "Brand reference is required"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate pairings of the same device and brand
deviceBrandSchema.index({ device: 1, brand: 1 }, { unique: true });

const DeviceBrand = mongoose.model("DeviceBrand", deviceBrandSchema);

export default DeviceBrand;
