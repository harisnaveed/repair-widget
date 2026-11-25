# 🔧 RepairWidget

A modern, full-stack multi-step repair booking widget and administrative dashboard for electronics and device repair businesses.

---

## 🚀 Overview

**RepairWidget** consists of two interconnected applications:
1. **`widget-frontend`**: A responsive, multi-step customer repair booking widget built with **React 19**, **TypeScript**, and **Tailwind CSS v4**.
2. **`admin-dashboard`**: A full-featured administrative portal and backend API built with **Node.js**, **Express 5**, **EJS**, **Bootstrap 5**, and **MongoDB / Mongoose**.

---

## 🛠️ Tech Stack

### Frontend (`widget-frontend`)
* **Framework:** React 19 + TypeScript (`.tsx`)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4
* **Icons:** Bootstrap Icons + Centralized Custom SVG Library
* **Architecture:** Modular components (`Card`, `Button`, `Sidebar`, `Header`, `Search`, `ProgressSteps`)

### Backend & Admin (`admin-dashboard`)
* **Runtime:** Node.js (ES Modules `"type": "module"`)
* **Web Framework:** Express 5
* **Database:** MongoDB via Mongoose
* **Templating:** EJS (Embedded JavaScript)
* **UI Theme:** Bootstrap 5.3 + DataTables 2.x
* **Data Management:** Automated idempotent seeders for Devices, Brands, and Device-Brand relations

---

## 📁 Project Structure

```text
repair-widget/
├── .gitignore
├── README.md
│
├── admin-dashboard/                 # Backend & Admin Dashboard
│   ├── .env.example                 # Sample environment variables
│   ├── package.json
│   ├── public/                      # Static assets (css, js, images)
│   └── src/
│       ├── config/
│       │   └── db.js                # Mongoose connection setup
│       ├── models/
│       │   ├── Device.js            # Device Mongoose Schema
│       │   ├── Brands.js            # Brand Mongoose Schema
│       │   └── DeviceBrand.js       # Pivot collection (Many-to-Many)
│       ├── routes/
│       │   ├── pageRoutes.js        # Dashboard navigation routes
│       │   └── deviceRoutes.js      # Device CRUD routes
│       ├── seeders/
│       │   ├── deviceSeeder.js      # Seeds initial device types
│       │   ├── brandSeeder.js       # Seeds tech brands
│       │   └── deviceBrandSeeder.js # Seeds Device ↔ Brand associations
│       ├── views/                   # EJS UI Templates
│       │   ├── devices/
│       │   │   └── all-devices.ejs  # Devices DataTable with Add Modal
│       │   ├── partials/            # Header, Navbar, Sidebar, Footer
│       │   └── dashboard.ejs        # Main analytics overview
│       ├── app.js                   # Express application setup
│       └── server.js                # Server entry point
│
└── widget-frontend/                 # Customer-Facing Repair Widget
    ├── package.json
    ├── vite.config.ts
    ├── index.html
    └── src/
        ├── components/
        │   ├── Card.tsx             # Universal card component
        │   ├── Button.tsx           # Reusable CTA & navigation button
        │   ├── Header.tsx           # Widget header
        │   ├── ProgressSteps.tsx    # Multi-step progress tracker
        │   ├── Search.tsx           # Search bar with filter tag
        │   ├── Sidebar.tsx          # Real-time repair cart breakdown
        │   └── Icons.tsx            # Centralized SVG icon library
        ├── types.ts                 # Global TypeScript interfaces
        ├── data.ts                  # Static/mock widget datasets
        ├── App.tsx                  # Main widget controller & state
        └── main.tsx                 # React DOM mount point
```

---

## ⚡ Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [MongoDB](https://www.mongodb.com/) (running locally or MongoDB Atlas connection URI)

---

### 1. Setting Up the Admin Dashboard (`admin-dashboard`)

1. Navigate to the admin dashboard directory:
   ```bash
   cd admin-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Ensure your `.env` contains:
   ```env
   PORT=3000
   MODE=development
   CLIENT_URL=http://localhost:5173
   MONGODB_URI=mongodb://127.0.0.1:27017/repair_widget
   ```

4. Seed initial database records:
   ```bash
   npm run seed:all
   ```
   *Seeds 8 Device categories, 12 Tech Brands, and 36 Many-to-Many Device-Brand links.*

5. Start the development server:
   ```bash
   npm run dev
   ```
   Admin dashboard runs at: **http://localhost:3000**

---

### 2. Setting Up the Customer Widget (`widget-frontend`)

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd widget-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Widget frontend runs at: **http://localhost:5173**

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🎯 Key Features

### Customer Repair Widget
* **Multi-Step Flow:** Step 1 (Device), Step 2 (Brand), Step 3 (Model), Step 4 (Issue), Step 5 (Details).
* **Universal Card Component:** A single, DRY `<Card />` handles devices, brands, and models.
* **Reactive Sidebar Cart:** Real-time updates as user selects device, brand, and model with instant removal triggers.
* **Dynamic Icons:** Sidebar and cards visually adapt icon displays using Bootstrap Icons and custom SVGs.
* **Instant Filtering:** Real-time search across devices and models.

### Admin Dashboard
* **DataTables Integration:** Interactive sorting, live search filtering, and pagination for devices.
* **Modal Device Creation:** Add new device categories directly with live icon preview.
* **Many-to-Many Pivot Architecture:** `DeviceBrand` model supports flexible associations (e.g., Apple produces Smartphones, Laptops, Tablets, and Watches).
* **Automated Seed Scripts:** Safe, idempotent database population.

---

## 📜 Available NPM Scripts

### In `admin-dashboard/`:
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts server with `nodemon` live-reload |
| `npm start` | Starts server with `node` |
| `npm run seed:devices` | Seeds device types into MongoDB |
| `npm run seed:brands` | Seeds brand types into MongoDB |
| `npm run seed:device-brands` | Seeds Device ↔ Brand pivot links |
| `npm run seed:all` | Runs all seeders in sequence |

### In `widget-frontend/`:
| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches Vite local development server |
| `npm run build` | Compiles TypeScript and creates production bundle |
| `npm run preview` | Previews the production build locally |

---

## 📄 License
This project is licensed under the **ISC License**.
