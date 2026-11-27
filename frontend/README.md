# Car Show Registration System – Frontend

## Project Overview

This is the frontend dashboard for the Car Show Registration System – AutoVista Events, Car Show 2027.

The application is built using React, JavaScript, Vite, and Tailwind CSS.

## Requirements

- Node.js
- npm
- Backend API (when using real API data)

## Installation

1. Navigate to the frontend directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL displayed in the terminal.

## Sample Data

The frontend initially uses `src/api/sample-data.js`.

This file contains 25 sample registrations and provides two functions:

- `getRegistrations()` – handles participant search, filtering, and pagination.
- `getSummary()` – provides dashboard KPI values.

The dashboard can run using sample data without requiring the backend API.

## Switching to the Real API

When the backend is ready, the frontend can use `src/api/registrationsApi.js` instead.

Follow these steps:

1. Open `src/pages/RegistrationsPage.jsx`.
2. Find the sample data import:

   ```javascript
   import {
     getRegistrations,
     getSummary,
   } from "../api/sample-data";
   ```

3. Replace it with the real API import:

   ```javascript
   import {
     getRegistrations,
     getSummary,
   } from "../api/registrationsApi";
   ```

4. Configure the API base URL in `.env.development`:

   ```env
   VITE_API_BASE_URL=http://localhost:5205
   ```

5. Make sure the real API functions use the same function names and return shapes as the sample data functions.

6. Restart the Vite development server if necessary.

## API Endpoints

### Get Registrations

`GET /api/registrations`

Supported query parameters:

- `participantName`
- `type`
- `status`
- `page`
- `pageSize`

### Get Dashboard Summary

`GET /api/registrations/summary`

The summary endpoint provides the KPI values displayed on the dashboard.

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── api/
│   │   ├── registrationsApi.js
│   │   └── sample-data.js
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   │   └── RegistrationsPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── README.md
```