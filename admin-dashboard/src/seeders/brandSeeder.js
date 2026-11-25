import "dotenv/config";
import mongoose from "mongoose";
import slugify from "slugify";
import connectDB from "../config/db.js";
import Brand from "../models/Brands.js";

const brands = [
  {
    name: "Apple",
    icon: "bi-apple",
    description: "iPhones, iPads, MacBooks, Apple Watches, and accessories.",
    status: "active",
    order: 1,
  },
  {
    name: "Samsung",
    icon: "bi-phone",
    description: "Galaxy smartphones, Galaxy Tabs, Galaxy Watches, and laptops.",
    status: "active",
    order: 2,
  },
  {
    name: "Google",
    icon: "bi-google",
    description: "Google Pixel smartphones, Pixel Fold, Pixel Tablets, and accessories.",
    status: "active",
    order: 3,
  },
  {
    name: "Huawei",
    icon: "bi-phone",
    description: "Huawei P & Mate series phones, MatePads, and smart wearables.",
    status: "active",
    order: 4,
  },
  {
    name: "Xiaomi",
    icon: "bi-phone",
    description: "Xiaomi, Redmi, and POCO smartphones, tablets, and smart devices.",
    status: "active",
    order: 5,
  },
  {
    name: "OnePlus",
    icon: "bi-phone",
    description: "OnePlus flagship & Nord series smartphones and tablets.",
    status: "active",
    order: 6,
  },
  {
    name: "Sony",
    icon: "bi-controller",
    description: "Xperia smartphones, PlayStation gaming consoles, and audio devices.",
    status: "active",
    order: 7,
  },
  {
    name: "Dell",
    icon: "bi-laptop",
    description: "Dell XPS, Inspiron, Latitude laptops, and Alienware PCs.",
    status: "active",
    order: 8,
  },
  {
    name: "HP",
    icon: "bi-laptop",
    description: "HP Spectre, Envy, Pavilion laptops, and OMEN gaming desktops.",
    status: "active",
    order: 9,
  },
  {
    name: "Lenovo",
    icon: "bi-laptop",
    description: "ThinkPad, Yoga, IdeaPad laptops, and Legion gaming PCs.",
    status: "active",
    order: 10,
  },
  {
    name: "Asus",
    icon: "bi-laptop",
    description: "ROG gaming laptops, ZenBooks, TUF Gaming, and motherboards.",
    status: "active",
    order: 11,
  },
  {
    name: "DJI",
    icon: "bi-send",
    description: "DJI Mavic, Mini, Air, and enterprise camera drones.",
    status: "active",
    order: 12,
  },
];

const seedBrands = async () => {
  try {
    await connectDB();
    console.log("🌱 Seeding Brands...");

    for (const brand of brands) {
      const slug = slugify(brand.name, { lower: true, strict: true });
      await Brand.findOneAndUpdate(
        { name: brand.name },
        { ...brand, slug },
        { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
      );
      console.log(`  ✓ Seeded: ${brand.name}`);
    }

    console.log("✨ All brands seeded successfully!");
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Error:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedBrands();
