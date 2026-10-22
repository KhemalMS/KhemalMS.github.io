---
cover:
  src: "/shots/v2-reports.webp"
  alt: "Kasir-AI v2 sales report dashboard: net revenue, gross profit, hourly chart, and top products"
gallery:
  - src: "/shots/v2-dashboard.webp"
    alt: "Daily summary dashboard with sales trend and AI insight card"
  - src: "/shots/v2-pos.webp"
    alt: "Flutter cashier app: menu catalog and active order cart"
  - src: "/shots/v2-kds.webp"
    alt: "Kitchen Display System showing pending kitchen tickets"
  - src: "/shots/v2-pos-shift.webp"
    alt: "Cashier shift resume screen with six-digit PIN"
tagline: "Offline-first point-of-sale for cafes and restaurants - runs on the cashier device and stays correct when the network drops."
summary: "A monorepo with a NestJS API, a Next.js dashboard, and a Flutter app that commits transactions locally and syncs when connectivity returns."
category: "Point of Sale System"
role: "Architect & sole developer"
locale: en
order: 1
title: Kasir-AI v2
year: '2026'
status: private
featured: true
stack:
  - Next.js 16
  - React 19
  - NestJS 11
  - Flutter
  - PostgreSQL
  - Redis
  - Drizzle ORM
  - Socket.IO
  - Docker
metrics:
  - value: '27'
    label: API modules
  - value: '14'
    label: Mobile features
  - value: '13'
    label: Dashboard areas
  - value: '2 tiers'
    label: Sync layers
---

## The problem

Caf— cashiers lose sales whenever the internet drops. Fully server-dependent web POS systems stop working exactly when the queue is longest — and the owner has no idea how much money should have come in.

Kasir-AI v2 is designed on the assumption that the network **cannot be trusted**. The cashier device must open a shift, sell, print receipts, and close the shift without ever reaching the server.

## Approach

**Offline-first on the device.** The Flutter app keeps products, orders, and shifts in SQLite via Drift. Every transaction is written locally first, then enters a sync queue. That queue survives force-quits and dead batteries.

**The server is the source of truth, not the critical path.** The NestJS API accepts batches from the queue, re-validates stock, and returns conflicts explicitly. The cashier never waits on a server round-trip to finish a sale.

**Realtime only for what cannot wait.** Socket.IO carries kitchen tickets (KDS) and cross-device notifications. If the socket dies, the app keeps running and reconciles later.

**Money is never casually rounded.** All amounts are stored as integer rupiah. Tax, discount, and change calculations live in one shared module used by both server and client, so receipts and reports never disagree.

## Architecture

```
apps/
  api/          NestJS 11 — 27 modules, Drizzle ORM, PostgreSQL, Redis
  backoffice/   Next.js 16 — 13 dashboard areas (products, staff, reports, KDS)
  pos/          Flutter — 14 features, Drift (SQLite), Bluetooth printing
infra/
  docker-compose.yml  postgres — redis — api — backoffice — nginx
```

Deployment is a single `docker-compose.yml`. Postgres and the API expose no host ports — only nginx is public, with separate volumes for uploads and scheduled backups.

## Decisions that mattered

- **Drift over key-value storage.** The cart needs relational queries (variant pricing, ingredient stock, per-category discounts). Storing it as JSON would force business logic to be rewritten on the client.
- **Drizzle over decorator-based ORMs.** The schema stays TypeScript, but generated migrations are readable and editable by hand — important when a money column gets the wrong type.
- **Idempotent transaction keys.** Each order carries a `clientGeneratedId`. The server rejects duplicates, so retrying the queue never creates a second receipt.
- **Shift as a transaction boundary.** Opening and closing a shift is not a bolt-on feature; it is what explains cash variance and anchors the daily report.

## Outcome

The system runs in a branch environment with Android devices and Bluetooth thermal printers. Field testing covered total network loss, two cashiers on one branch, and shift close with a cash variance.

The repository is private because it contains operational configuration and data. Screenshots on this page come from the running system with sample data.


