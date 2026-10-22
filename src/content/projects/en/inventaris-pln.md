---
cover:
  src: "/shots/pln-aset.webp"
  alt: "PLN inventory asset list: 20 assets grouped by category with status and location"
gallery:
  - src: "/shots/pln-dashboard.webp"
    alt: "Home dashboard with asset summary, movements, and action center"
  - src: "/shots/pln-detail.webp"
    alt: "Individual asset detail with QR code, placement, and actions"
tagline: "IT asset lifecycle management for an electric utility - from procurement to disposal, with a complete audit trail."
summary: "An internal application tracking thousands of individual and bulk assets across warehouses, divisions, and project sites, with tiered approvals and photo evidence."
category: "Enterprise System"
role: "Sole developer"
locale: en
order: 3
title: PLN Batam Asset Inventory
year: '2026'
status: private
featured: false
stack:
  - React 19
  - Vite
  - Express
  - PostgreSQL
  - Node.js
  - JWT
  - TOTP 2FA
  - NSSM / Windows Server
metrics:
  - value: '30'
    label: Database tables
  - value: '16'
    label: API route modules
  - value: '28'
    label: Test files
  - value: '25'
    label: Application pages
---

## The problem

IT assets at an electric utility change hands constantly: borrowed by technicians, installed on site, shipped to vendors, repaired, or retired. Spreadsheet records turned a simple question — *"where is this UPS serial number right now?"* — into a multi-day investigation.

Worse: without an audit trail, asset movement cannot be accounted for during an inspection.

## What was built

**Two asset kinds in one system.** Individual assets (servers, CCTV, laptops) are tracked by serial. Bulk assets (UTP cable by the metre, fibre by the roll) are tracked per unit with automatic remaining-quantity calculation. Both share the same loan, repair, and transfer flows.

**Tiered approval.** High-value loans pass through two stages: supervisor, then warehouse admin. Every approval records time and identity.

**Photo evidence as part of the flow, not an attachment.** Pickup and return require condition photos. Images are compressed server-side, stored under traceable names, and shown in the asset movement history.

**An audit log that cannot be erased.** Every sensitive action writes to an audit table protected by triggers. A separate archive keeps historical rows so the working table stays lean.

**Three layers of access control.** Page permissions, feature permissions, and approval authority are separate. Adding a role needs no code change.

## Architecture

```
client/    React 19 + Vite — 25 pages, no UI framework
server/    Express — 16 route modules, JWT, TOTP 2FA, sharp (photos)
           PostgreSQL 16 — 30 tables + audit triggers + report views
scripts/   update.ps1 — rollback.ps1 — status-check.ps1
```

The app runs as a Windows service (NSSM) on an internal VPS. The update procedure includes a database backup before migration and rollback to a specific commit — because re-auditing asset data after a failed migration is not an option.

## Decisions that mattered

- **PostgreSQL over MySQL.** Audit triggers, constraints, and `jsonb` for dropdown configuration are far more compact than the alternatives.
- **Dropdowns as data, not enums.** Units, conditions, location types, and roles live in a configuration table. The organization changes its own vocabulary without a release.
- **Configurable asset code format.** `PLN-{YYYY}-{SEQ}` lives in system settings, so numbering can follow internal policy.
- **Response-shape tests, not just status codes.** Twenty-eight test files assert API response contracts, because what breaks the frontend is not a 500 — it is a missing field.

## Outcome

The system is used internally to track assets across warehouses and project sites. The repository is private because it contains organizational configuration.


