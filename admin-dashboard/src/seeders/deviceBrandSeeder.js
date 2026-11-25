import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Device from "../models/Device.js";
import Brand from "../models/Brands.js";
import DeviceBrand from "../models/DeviceBrand.js";

// Many-to-Many Mappings: Device Name -> Array of Brand Names
const deviceBrandMappings = {
  Smartphone: [
    "Apple",
    "Samsung",
    "Google",
    "Huawei",
    "Xiaomi",
    "OnePlus",
    "Sony",
  ],
  Tablet: ["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "Lenovo"],
  Laptop: ["Apple", "Dell", "HP", "Lenovo", "Asus", "Huawei", "Samsung"],
  "Desktop PCs": ["Apple", "Dell", "HP", "Lenovo", "Asus"],
  Smartwatches: ["Apple", "Samsung", "Google", "Huawei", "Xiaomi"],
  Drones: ["DJI"],
  "Gaming Consoles": ["Sony"],
  "Audio & Headphones": ["Apple", "Sony", "Samsung", "Google"],
};

const seedDeviceBrands = async () => {
  try {
    await connectDB();
    console.log("🌱 Seeding Device-Brand Relationships (Pivot)...");

    // Fetch all devices and brands into lookup maps
    const allDevices = await Device.find({});
    const allBrands = await Brand.find({});

    const deviceMap = new Map(allDevices.map((d) => [d.name, d._id]));
    const brandMap = new Map(allBrands.map((b) => [b.name, b._id]));

    let seededCount = 0;

    for (const [deviceName, brandNames] of Object.entries(deviceBrandMappings)) {
      const deviceId = deviceMap.get(deviceName);

      if (!deviceId) {
        console.warn(`  ⚠️ Device "${deviceName}" not found in DB. Skipping.`);
        continue;
      }

      for (let index = 0; index < brandNames.length; index++) {
        const brandName = brandNames[index];
        const brandId = brandMap.get(brandName);

        if (!brandId) {
          console.warn(`  ⚠️ Brand "${brandName}" not found in DB. Skipping.`);
          continue;
        }

        await DeviceBrand.findOneAndUpdate(
          { device: deviceId, brand: brandId },
          {
            device: deviceId,
            brand: brandId,
            status: "active",
            order: index + 1,
          },
          { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
        );

        console.log(`  ✓ Linked: ${deviceName} ↔ ${brandName}`);
        seededCount++;
      }
    }

    console.log(`✨ Successfully seeded ${seededCount} Device-Brand links!`);
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Error:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedDeviceBrands();
