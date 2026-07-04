# Travelogue

Travelogue is a full-stack travel platform that brings tourists, guides, hotels, and administrators into one connected experience.

It combines destination discovery, itinerary planning, live chat, hotel and guide bookings, reviews, travelogues, and AI-powered assistance so users can move from inspiration to trip planning to memory keeping without switching tools.

## Key Features

### For Tourists
- Discover destinations, tours, guides, and hotels.
- Build and manage travel itineraries.
- Use AI-powered virtual guide and travel recommendations.
- Book guides and hotels in one place.
- Chat with guides and hotels in real time.
- Leave reviews and manage trip feedback.
- Create, save, and explore travelogues.
- Check weather, travel tips, and emergency support resources.

### For Guides
- Create and manage guide profiles.
- Set availability, tours, and booking workflows.
- Track earnings, reviews, and trip history.
- Communicate with tourists through chat.
- Upload identity proof and completed tour media.
- Manage advance payment and booking updates.

### For Hotels
- Create and manage hotel profiles.
- Handle room inventory and bookings.
- Review guest intelligence and customer insights.
- View reviews, chat, and reports from a dedicated dashboard.

### For Admins
- Approve or reject guide registrations.
- Moderate users, reviews, and travelogues.
- Monitor analytics, reports, and platform activity.
- Manage the overall health of the platform.

## Tech Stack

- Frontend: React, Vite, React Router, Material UI, Tailwind CSS, Framer Motion, Leaflet, Recharts, i18next
- Backend: Node.js, Express, MongoDB, Mongoose, Socket.IO, JWT, Multer, Cloudinary, Nodemailer
- AI and data services: Gemini, OpenRouter, OpenAI, Groq, OpenWeather, OpenTripMap, Unsplash, Google Maps, OpenRouteService, Amadeus, Foursquare, Geoapify, Wikipedia, YouTube, exchange-rate services

## Repository Structure

```text
Travelogue/
|-- backend/          # Express API, Socket.IO server, models, routes, services
|-- client/           # Vite React app with tourist, guide, hotel, and admin UI
|-- render.yaml       # Render deployment config for the backend
`-- README.md         # Project overview and setup instructions
```

## Prerequisites

- Node.js 18 or later
- npm 9 or later
- MongoDB database or MongoDB Atlas cluster
- Cloudinary account for media uploads
- Optional API keys for AI, maps, weather, and travel integrations

## Environment Variables

Create a `.env` file in `backend/` and `client/` before running the app.

### `backend/.env`

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/travel
JWT_SECRET=replace-with-a-long-random-secret

# Frontend origin for CORS and AI provider metadata
CLIENT_URL=http://localhost:5173
CORS_ALLOWED_ORIGINS=http://localhost:5173

# Cloudinary for uploads
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
# or use:
# CLOUDINARY_CLOUD_NAME=your_cloud_name
# CLOUDINARY_API_KEY=your_api_key
# CLOUDINARY_API_SECRET=your_api_secret

# Optional integrations
GEMINI_API_KEY=
OPENROUTER_API_KEY=
OPENAI_API_KEY=
GROQ_API_KEY=
OPENTRIPMAP_API_KEY=
OPENWEATHER_API_KEY=
OPENROUTE_API_KEY=
UNSPLASH_ACCESS_KEY=
GOOGLE_MAPS_API_KEY=
AMADEUS_CLIENT_ID=
AMADEUS_CLIENT_SECRET=
EMAIL_USER=
EMAIL_PASS=
EMAIL_FROM=
```

The backend also accepts `MONGO_URI`, `FRONTEND_PUBLIC_URL`, and `APP_PUBLIC_URL` as alternatives for the values above.

### `client/.env`

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_SOCKET_BASE_URL=http://localhost:3001
VITE_ASSET_BASE_URL=http://localhost:3001

# Optional client-side integrations
VITE_OPENTRIPMAP_API_KEY=
VITE_UNSPLASH_ACCESS_KEY=
VITE_OPENWEATHER_API_KEY=
VITE_OPENROUTESERVICE_KEY=
VITE_MAP_PROVIDER=osm
VITE_OLA_MAPS_API_KEY=
VITE_OLA_MAPS_TILE_URL=
```

If `VITE_API_BASE_URL` is not set, the frontend falls back to `/api` on the current origin.

## Local Development

### 1. Install backend dependencies

```bash
cd backend
npm install
```

### 2. Configure the backend

Create `backend/.env` using the variables above, then start the server:

```bash
npm start
```

The backend runs on `http://localhost:3001` by default.

### 3. Install frontend dependencies

Open a second terminal:

```bash
cd client
npm install
```

### 4. Configure the frontend

Create `client/.env` and point `VITE_API_BASE_URL` to the backend:

```env
VITE_API_BASE_URL=http://localhost:3001/api
```

### 5. Start the frontend

```bash
npm run dev
```

The main app runs on `http://localhost:5173`.

### 6. Open the dashboards

- Public landing page: `http://localhost:5173`
- Tourist dashboard: `http://localhost:5173/tourist-dashboard`
- Guide dashboard: `http://localhost:5173/guide-dashboard`
- Hotel dashboard: `http://localhost:5173/hotel-dashboard`
- Admin dashboard: `http://localhost:5173/admin`

## Available Scripts

### Backend

- `npm start` - Start the Express server with Socket.IO
- `npm run seed:presentation` - Seed demo/presentation data

### Frontend

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the frontend for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build locally

## Deployment Notes

- The backend includes `render.yaml` for Render deployment.
- The frontend includes `client/vercel.json` for SPA routing on Vercel.
- Update the backend CORS origin list before deploying.
- Point `VITE_API_BASE_URL` to the deployed backend API in production.

## Notes

- Admin registration is disabled. Admin accounts are system-managed.
- Uploaded media is served from the backend `/uploads` path.
- Optional API keys unlock richer features, but the core app can still run with a minimal local setup.


