
# Quick URL App 

A modern URL shortening web application built using React 18 and Vite.  
The application runs entirely on the client side and provides URL shortening, analytics tracking, and logging using browser localStorage, with no backend dependency.

---

## Tech Stack

- React 18
- Vite
- React Router
- Vanilla CSS
- localStorage (Client-Side Persistence)

Note: The application does not use console logging. A custom logging middleware captures and stores structured logs in localStorage.

---

## Getting Started (Run Locally)

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation and Run

```bash
npm install
npm run dev
```
- The application will start on:
```
http://localhost:3000
```


## Features

- Create shortened URLs with:

-- Optional custom shortcode

-- Optional validity period (default: 30 minutes)

- Expiry handling: expired links do not redirect and display an informational message

- Click analytics including:

-- Timestamp

-- Referrer

-- User timezone (coarse location)

- Shortcode uniqueness enforcement with client-side collision detection

- Persistent data storage using browser localStorage

- Custom logging middleware (no console logs)

## Data Persistence

All application data is stored in browser localStorage, including:

- Shortened URL records

- Per-shortcode click history

- Structured application logs

No external APIs or backend services are required.
## Project Structure
```
src/
  components/       # Reusable UI components
  context/          # Logger provider (acts as logging middleware)
  lib/              # Storage, validation, shortener and time utilities
  routes/           # Pages (Shortener, Stats, Redirect, NotFound)
```

## Notes

- Shortcode collisions for custom codes are handled with client-side validation errors

- Expired links do not redirect

- Coarse location tracking is based on browser timezone

- This is a frontend-only application

## Future Enhancements

- Backend integration (Node.js or Firebase)

- Authentication and user-based URL management

- Export analytics to CSV

- QR code generation for shortened URLs

## Author

**Gargi Mishra**
