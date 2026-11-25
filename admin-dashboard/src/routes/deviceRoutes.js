import { Router } from "express";
import Device from "../models/Device.js";

const deviceRoutes = Router();

// GET /devices - Display all devices
deviceRoutes.get("/", async (req, res) => {
  try {
    const devices = await Device.find().sort({ order: 1, createdAt: -1 });
    res.render("devices/all-devices", { devices });
  } catch (error) {
    console.error("Error fetching devices:", error);
    res.render("devices/all-devices", { devices: [] });
  }
});

// POST /devices - Create new device
deviceRoutes.post("/add", async (req, res) => {
  try {
    const { name, description, icon, status, order } = req.body;
    await Device.create({
      name,
      description,
      icon: icon || "bi-phone",
      status: status || "active",
      order: order ? Number(order) : 0,
    });
    res.redirect("/devices");
  } catch (error) {
    console.error("Error creating device:", error);
    res.redirect("/devices");
  }
});

export default deviceRoutes;
