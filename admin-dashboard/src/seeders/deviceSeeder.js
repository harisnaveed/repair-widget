import "dotenv/config";
import mongoose from "mongoose";
import slugify from "slugify";
import connectDB from "../config/db.js";
import Device from "../models/Device.js";

const devices = [
  {
    name: "Smartphone",
    icon: "bi-phone",
    description: "Mobile phones including iPhones, Samsung Galaxy, Google Pixel, etc.",
    status: "active",
    order: 1,
  },
  {
    name: "Tablet",
    icon: "bi-tablet",
    description: "iPads, Android tablets, Microsoft Surface devices, etc.",
    status: "active",
    order: 2,
  },
  {
    name: "Laptop",
    icon: "bi-laptop",
    description: "Apple MacBooks, Windows laptops, Chromebooks, gaming laptops, etc.",
    status: "active",
    order: 3,
  },
  {
    name: "Desktop PCs",
    icon: "bi-pc-display",
    description: "Custom desktop rigs, iMacs, all-in-ones, mini PCs, workstations, etc.",
    status: "active",
    order: 4,
  },
  {
    name: "Smartwatches",
    icon: "bi-smartwatch",
    description: "Apple Watch, Samsung Galaxy Watch, Garmin, Fitbit, etc.",
    status: "active",
    order: 5,
  },
  {
    name: "Drones",
    icon: "bi-send",
    description: "DJI, Autel, quadcopters, camera drones, FPV drones, etc.",
    status: "active",
    order: 6,
  },
  {
    name: "Gaming Consoles",
    icon: "bi-controller",
    description: "PlayStation, Xbox, Nintendo Switch, Steam Deck, etc.",
    status: "active",
    order: 7,
  },
  {
    name: "Audio & Headphones",
    icon: "bi-headphones",
    description: "AirPods, wireless earbuds, over-ear studio headphones, speakers, etc.",
    status: "active",
    order: 8,
  },
];

const seedDevices = async () => {
  try {
    await connectDB();
    console.log("🌱 Seeding Devices...");

    for (const dev of devices) {
      const slug = slugify(dev.name, { lower: true, strict: true });
      await Device.findOneAndUpdate(
        { name: dev.name },
        { ...dev, slug },
        { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
      );
      console.log(`  ✓ Seeded: ${dev.name}`);
    }

    console.log("✨ All devices seeded successfully!");
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Error:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedDevices();
