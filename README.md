# Manetho Landing Page (Full Stack)

This repository includes a runnable full-stack implementation of the Manetho museums landing page.

- **Frontend:** React + Vite (`frontend/`)
- **Backend:** Express API (`backend/`)

---

## 1) Prerequisites

- Node.js 20+ (recommended)
- npm 10+

---

## 2) Install

From repository root:

```bash
cp .env.example .env
npm install
```

---

## 3) How to run

### Run full stack together (recommended)

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4000/api`

### Run backend only

```bash
npm run dev -w backend
```

### Run frontend only

```bash
npm run dev -w frontend
```

> If running frontend alone, ensure backend is running or set `VITE_API_BASE_URL` to a reachable API host.

---

## 4) Production-style run

```bash
npm run build
npm run start
```

- `npm run build` builds the frontend.
- `npm run start` starts backend server on `PORT` (default `4000`).

---

## 5) Environment variables

See `.env.example`:

- `PORT` — backend server port
- `FRONTEND_ORIGIN` — CORS allowed origin
- `VITE_API_BASE_URL` — frontend API base URL for local/proxied calls

---

## 6) Validation / test commands

From repository root:

```bash
npm run lint
npm run test
npm run test:unit
npm run test:integration
npm run test:e2e
npm run validate
```

- `lint`: ESLint for backend + frontend
- `test`: backend + frontend test suites
- `test:unit`: unit-focused tests
- `test:integration`: backend API integration tests
- `test:e2e`: frontend smoke e2e-style flow
- `validate`: full lint + test + e2e run

---

## 7) API endpoints

- `GET /api/health`
- `GET /api/content`
- `POST /api/contact`
