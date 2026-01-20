
# Quick URL App (Frontend Only)

Tech: React 18 + Vite (runs on **localhost:3000**), Vanilla CSS, React Router.
No console logging — a custom Logging Middleware stores logs in `localStorage`.

## Run Locally
```bash
npm i
npm run dev
```
This opens `http://localhost:3000`.

## Pages
- `/` Shortener: add up to 5 URLs, each with optional validity (minutes, default 30) and optional preferred shortcode.
- `/stats` Statistics: list all shortened URLs with creation/expiry and click analytics (timestamp, referrer, timezone).
- `/:code` Redirect: client-side route that records a click and redirects to the original URL.

## Persistence
All data is stored in `localStorage`: URLs, per-code clicks, and structured logs (no console logs).

## Project Structure
```
src/
  components/       # Reusable UI components
  context/          # Logger provider (acts as logging middleware)
  lib/              # Storage, validation, shortener and time utilities
  routes/           # Pages (Shortener, Stats, Redirect, NotFound)
```

## Notes
- Shortcode uniqueness is enforced. Collisions (custom code) show client-side errors.
- Expired links do not redirect; they show an info message.
- "Coarse location" uses the browser timezone (no external APIs needed).
```
