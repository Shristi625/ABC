# Travel Diaries Backend — API Guide (Auth)

This document describes the currently implemented backend APIs so frontend developers can integrate quickly and correctly. It reflects the actual code in `src/` and only covers available routes (Auth + health checks).

## Quick Start
1. Install Node.js matching `.nvmrc` (recommended via `nvm`).
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Create `.env` (see variables below) and start the server:
   ```bash
   npm start
   ```

Server runs on `http://localhost:${PORT}` (default `5000`). All API routes are mounted by `src/app.js` and `src/routes/index.route.js`.

## Environment Variables
Required by the current code:
- `PORT` — API port (default `5000`).
- `MONGODB_URI` — MongoDB connection string.
- `JWT_SECRET` — secret used to sign JWTs.
- `EXPIRES_IN` — JWT expiry (e.g., `12h`, `1d`).
- `NODE_ENV` — `development` or `production` (affects cookie security and error stacks).

Example `.env`:
```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/travel-diaries
JWT_SECRET=replace-with-strong-secret
EXPIRES_IN=12h
NODE_ENV=development
```

## Base URLs and Health
- `GET /` — simple uptime check, returns API name/version.
- `GET /health` — server health + DB connectivity status.

All auth routes are under: `/api/v1/auth`

## Response Shape
Successful responses (via `successResponse`) use:
```json
{
  "success": true,
  "statusCode": 200,
  "message": "...",
  "data": { /* payload */ }
}
```

Error responses (via global error handler) use:
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Validation Error",
  "error": [ /* details or null */ ],
  "stack": null | "stack trace in non-production"
}
```

## Authentication
Auth uses JWTs. On sign-up and login, the server:
- returns a `token` in the JSON `data` payload,
- sets an HTTP-only cookie named `token` (12h, `SameSite=Lax`, `Secure` in production).

Important: The current `authenticate()` middleware expects the token in the `Authorization` header, not from the cookie. Frontend must send:
```
Authorization: Bearer <token>
```

### Rate Limiting
- Global: 100 requests / 15 minutes (`globalRateLimiter`).
- Auth endpoints: 5 requests / 15 minutes (`authRateLimiter`). Exceeding returns HTTP 429.

## Auth Endpoints

### POST /api/v1/auth/sign-up
Creates a new user and returns a JWT.

Validation (see `src/validators/auth.validator.js`):
- `fullName`: required, non-empty string.
- `email`: required, valid email.
- `password`: required, min 6 chars.
- `confirmPassword`: must match `password`.
- `role` (optional): one of `user` | `admin` (defaults to `user`).
- `privacy`: must equal the string `true` (privacy policy agreement).
- `travelTips`: boolean (defaults to `false`).

Request body example:
```json
{
  "fullName": "Ada Lovelace",
  "email": "ada@example.com",
  "password": "secret123",
  "confirmPassword": "secret123",
  "privacy": true,
  "travelTips": true
}
```

Success response (201):
```json
{
  "success": true,
  "statusCode": 201,
  "message": "User registered successfully",
  "data": {
    "userId": "<mongo-id>",
    "email": "ada@example.com",
    "token": "<jwt>"
  }
}
```

Possible errors:
- 400 — validation errors (details in `error`).
- 409 — user already exists.

### POST /api/v1/auth/login
Logs in an existing user by email and password.

Request body:
```json
{
  "email": "ada@example.com",
  "password": "secret123"
}
```

Success response (200):
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Login successful",
  "data": {
    "userId": "<mongo-id>",
    "email": "ada@example.com",
    "token": "<jwt>"
  }
}
```

Possible errors:
- 400 — validation errors.
- 401 — invalid email or password.

### POST /api/v1/auth/logout
Clears the `token` cookie. Requires authentication header due to `authenticate()` middleware on this route.

Headers:
```
Authorization: Bearer <token>
```

Success response (200):
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Logout successful",
  "data": {}
}
```

Notes:
- This endpoint clears the cookie; if you store the token in memory/local storage, also remove it client-side.

## Using From Frontend

### Base config (Axios)
```js
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Attach token from app state/localStorage when present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("td_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

### Sign Up
```js
const res = await api.post("/api/v1/auth/sign-up", {
  fullName: "Ada Lovelace",
  email: "ada@example.com",
  password: "secret123",
  confirmPassword: "secret123",
  privacy: "true",
  travelTips: true,
});
const { token, userId, email } = res.data.data;
localStorage.setItem("td_token", token);
```

### Login
```js
const res = await api.post("/api/v1/auth/login", {
  email: "ada@example.com",
  password: "secret123",
});
const { token } = res.data.data;
localStorage.setItem("td_token", token);
```

### Logout
```js
await api.post("/api/v1/auth/logout");
localStorage.removeItem("td_token");
```

### Fetching a protected resource
When protected endpoints are added, include `Authorization: Bearer <token>` as shown in the interceptor. The current middleware reads only the header, not the cookie.

## Notes and Gotchas
- Cookies: The server sets an HTTP-only cookie, but auth middleware reads the token from the `Authorization` header. Keep sending the header until middleware is updated to support cookies.
- CORS: `cors()` is enabled with default settings. If frontend and backend run on different origins and you plan to use cookies, you will need server changes (`credentials: true` and explicit `origin`). Header-based auth works without credentials.
- Roles: `role` defaults to `user`; to restrict routes by role later, pass roles to `authenticate([...])`.

## Models
`User` fields (see `src/models/user.model.js`): `fullName`, `email` (unique), `password` (hashed, not selected by default), `role` (`user|admin`), `privacy` (required agreement), `travelTips` (boolean). Password hashing uses bcrypt pre-save.

---
If you need additional endpoints documented as you add them (e.g., diaries), let me know and I’ll extend this guide.