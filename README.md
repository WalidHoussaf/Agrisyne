# 🌾 AgriSenseAI

A smart agricultural web platform that allows farmers to:
- Visualize their farms and fields
- Monitor real-time data from sensors (e.g., soil moisture, temperature, humidity)
- Receive analytics and alerts
- Manage devices and performance across their fields

## 🧭 Architectural Overview

This project uses a **Fullstack MVC (Model–View–Controller)** pattern built entirely inside Next.js:

- **Next.js App & API Routes** → for both frontend pages and backend endpoints
- **Mongoose** → for data modeling and interaction with MongoDB
- **Tailwind CSS** → for clean, fast UI styling
- **NextAuth.js** → for authentication & session management
- **Recharts / Leaflet** → for data visualization (charts, maps)

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your MongoDB URI and other credentials.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
AgriSenseAI_Project/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── api/               # API routes (Controllers)
│   └── layout.tsx         # Root layout
├── models/                # Mongoose models (Data Layer)
├── lib/                   # Utility functions
├── components/            # React components (View Layer)
└── public/               # Static assets
```

## 🧩 MVC Pattern

### Models (Data Layer)
- **User** - Farmer or admin profile
- **Farm** - Represents a farm owned by a user
- **Field** - Specific area of land under a farm
- **Sensor** - IoT device installed in a field
- **SensorReading** - Periodic data sent from sensors
- **Alert** - Notifications for abnormal readings

### Controllers (API Routes)
API endpoints in `/app/api/` handle business logic and database operations.

### Views (Frontend)
React components and pages in `/app/` and `/components/` for the user interface.

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Node.js
- **Database:** MongoDB with Mongoose ODM
- **Auth:** NextAuth.js
- **Visualization:** Recharts, Leaflet
- **Icons:** Lucide React

## 📝 License

MIT
