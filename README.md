# Manetho Landing Page (Full Stack)

This repository now includes a runnable full-stack implementation of the Manetho museums landing page:

- **Frontend:** React + Vite (`frontend/`)
- **Backend:** Express API (`backend/`)

## Setup

```bash
cp .env.example .env
npm install
```

## Run locally

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4000/api`

## Build + start

```bash
npm run build
npm run start
```

## Validation commands

```bash
npm run lint
npm run test
npm run test:unit
npm run test:integration
npm run test:e2e
npm run validate
```

## API endpoints

- `GET /api/health`
- `GET /api/content`
- `POST /api/contact`
