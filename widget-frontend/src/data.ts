import type { StepItem, ModelItem, DeviceItem } from "./types";

export const steps: StepItem[] = [
  { id: 1, label: "Device", state: "done" },
  { id: 2, label: "Brand", state: "done" },
  { id: 3, label: "Model", state: "current" },
  { id: 4, label: "Issue", state: "upcoming" },
  { id: 5, label: "Details", state: "upcoming" },
];

export const models: ModelItem[] = [
  { name: "iPhone 15 Pro Max", year: 2023 },
  { name: "iPhone 15 Pro", year: 2023 },
  { name: "iPhone 15 Plus", year: 2023 },
  { name: "iPhone 15", year: 2023 },
  { name: "iPhone 14 Pro", year: 2022 },
  { name: "iPhone 14", year: 2022 },
  { name: "iPhone 13", year: 2021 },
  { name: "iPhone 12", year: 2020 },
];

export const devices: DeviceItem[] = [
  { name: "Smartphone", icon: "bi-phone" },
  { name: "Tablet", icon: "bi-tablet" },
  { name: "Laptop", icon: "bi-laptop" },
  { name: "Desktop PCs", icon: "bi-pc-display" },
  { name: "Smartwatches", icon: "bi-smartwatch" },
  { name: "Drones", icon: "bi-send" },
  { name: "Gaming Consoles", icon: "bi-controller" },
  { name: "Audio & Headphones", icon: "bi-headphones" },
];
