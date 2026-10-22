---
cover:
  src: "/shots/v1-mobile.webp"
  alt: "Kasir-AI v1 cashier interface: category product catalog and order cart"
gallery:
  - src: "/shots/v1-dashboard.webp"
    alt: "Kasir-AI v1 admin dashboard with sales summary and product management"
  - src: "/shots/v1-api.webp"
    alt: "Kasir-AI v1 API explorer"
tagline: "The first generation cashier system - a three-platform monorepo with an Express API, React dashboard, and Flutter app."
summary: "The open-source version that became the base for Kasir-AI v2. It shows the original system shape, relational schema, and cafe operational flow."
category: "Point of Sale System"
role: "Sole developer"
locale: en
order: 2
title: Kasir-AI v1
year: '2026'
status: open-source
featured: true
repoUrl: https://github.com/KhemalMS/kasir-ai
stack:
  - Express
  - TypeScript
  - React 18
  - Vite
  - Flutter
  - MySQL
  - Drizzle ORM
metrics:
  - value: '23'
    label: API route modules
  - value: '27'
    label: Database tables
  - value: '15'
    label: Admin pages
  - value: '3'
    label: Platforms
---

## Context

This is the first public version of Kasir-AI. The goal was simple: prove that a single developer can run products, orders, staff, shifts, and reports from one system instead of spreadsheets.

It is no longer under active development. It stays around as a record of how the v2 architecture came to be — and as an honest comparison between the original plan and the final result.

## What's inside

- **Express API** with 23 route modules: products, categories, orders, inventory, staff, shifts, branches, expenses, payments, finance reports, staff reports, tax reports, and file uploads.
- **MySQL schema** with 27 tables, including product variants, ingredients, inventory batches, attendance, staff salaries, and stock adjustment history.
- **React dashboard** with 15 pages: dashboard, cashier, kitchen, products, inventory, transactions, staff, branches, reports, expenses, settings, profile, open shift, close shift, and login.
- **Flutter app** for Android cashier and kitchen devices.

## What changed in v2

Many decisions here proved too thin for real use:

| v1 | v2 | Why |
| --- | --- | --- |
| Express + Drizzle | NestJS 11 | Modules, validation, and DI become essential past 20 modules |
| MySQL | PostgreSQL | Stricter transactions, constraints, and money types |
| React + Vite | Next.js 16 | Server components and file-based routing |
| Provider | Riverpod + Drift | Offline-first needs testable state |
| No realtime | Socket.IO | Kitchen tickets must arrive without a refresh |

For those reasons, v2 was rebuilt from scratch rather than patched.

## Contribution

The repository is open to read and learn from. The database schema and route modules are the most useful reference points: both show the full shape of a caf— operational domain.


