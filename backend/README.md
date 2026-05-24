# Backend

This folder contains the NestJS backend for the Matcha Shop demo.

## Getting started

```bash
cd backend
npm install
npm run start:dev
```

## Available APIs
- `GET /matcha-products` - get all matcha products
- `GET /matcha-products/:id` - get a single product
- `POST /matcha-products` - create a product
- `PATCH /matcha-products/:id` - update a product
- `DELETE /matcha-products/:id` - delete a product
- `POST /auth/login` - admin login
- `POST /order/create` - create a new customer order

## Notes
- Admin credentials are `admin` / `matcha123`
- Order creation stores orders in the database with customer details and order items
- CORS is enabled for `http://localhost:5173`
