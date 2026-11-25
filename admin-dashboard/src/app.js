import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import pageRoutes from "./routes/pageRoutes.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// 1. Recreate __filename and __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Configure EJS view engine and views folder (inside src)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 3. Serve static files from the public folder (at project root)
app.use(express.static(path.join(__dirname, "../public")));

// 4. Standard middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. Routes
app.use("/", pageRoutes);

export default app;
