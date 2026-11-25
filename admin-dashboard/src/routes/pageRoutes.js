import { Router } from "express";
import deviceRoutes from "./deviceRoutes.js";

const pageRoutes = Router();

pageRoutes.get("/", (req, res) => {
  res.render("dashboard");
});

pageRoutes.get("/tables", (req, res) => {
  res.render("tables");
});

pageRoutes.get("/products", (req, res) => {
  res.render("products");
});

pageRoutes.get("/modals", (req, res) => {
  res.render("modals");
});

pageRoutes.get("/forms", (req, res) => {
  res.render("forms");
});

pageRoutes.use("/devices", deviceRoutes);

export default pageRoutes;
