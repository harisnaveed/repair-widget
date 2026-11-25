import Device from "../models/Device.js";

export const getDevices = async (req, res) => {
  try {
    // Sorts devices by order (ascending) order: 1, for descending order: -1
    const devices = await Device.find().sort({ order: -1 });

    res.render("devices/all-devices", {
      devices,
    });
  } catch (error) {
    console.error("Error fetching devices:", error);

    res.status(500).render("error", {
      title: "Server Error",
      message: "Something went wrong while fetching devices.",
    });
  }
};
