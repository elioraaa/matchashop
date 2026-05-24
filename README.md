# Matcha Shop

This repository includes a Vite + React frontend and a NestJS backend for a demo matcha shop.

## Setup

### Backend
1. Open a terminal in `backend/`
2. Run `npm install`
3. Run `npm run start:dev`

The backend listens on `http://localhost:3000` by default.

### Frontend
1. Open a terminal in `frontend/`
2. Run `npm install`
3. Run `npm run dev`

The frontend listens on `http://localhost:5173`.

## What was fixed
- Added working backend order persistence with `order` and `order_items` tables.
- Implemented a demo admin login endpoint in the backend.
- Connected the checkout modal to the backend order API.
- Added a root `.gitignore` and improved project setup documentation.

## Notes
- The admin credentials are `admin` / `matcha123`.
- Checkout creates a persisted order in the backend.
- The frontend still uses demo seed data when the backend catalog is offline.
