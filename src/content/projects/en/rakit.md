---
cover:
  src: "/shots/rakit.webp"
  alt: "Rakit seven-stage pipeline diagram with measurable quality gates"
tagline: "An AI-driven SDLC orchestrator - a seven-stage pipeline with measurable quality gates, not just code generation."
summary: "An experimental platform that turns an application description into locked artifacts - PRD, system contract, acceptance tests - and then code that must pass them."
category: "Developer Tooling"
role: "Designer & developer"
locale: en
order: 4
title: Rakit
year: '2026'
status: in-development
featured: false
repoUrl: https://github.com/KhemalMS/rakit
stack:
  - TypeScript
  - Node.js
  - Turbo
  - pnpm
  - Zod
  - Fastify
  - BullMQ
  - Docker
metrics:
  - value: '7'
    label: Pipeline stages
  - value: 'M1'
    label: Active milestone
  - value: 'MIT'
    label: License
---

## The idea

Today's code generation tools produce something quickly and then stop. The unanswered questions: is it correct, can it be tested, and who is accountable when it is wrong.

Rakit tries to invert the order. Before a single line of code is written, the system must produce artifacts a human can inspect: requirements, a system contract, a task breakdown, and **locked acceptance tests**. Code is only done when those tests are green.

## Seven stages

1. **Requirements** — `PRD.json`
2. **System design** — `CONTRACT.json`, `ARCHITECTURE.md`
3. **Task breakdown** + locked acceptance tests
4. **Coding** in a sandbox with a green loop
5. **Risk-based review** — AI reviewer and a human Overseer
6. **Deploy** with automatic rollback
7. **Documentation** and handoff

Every gate is measurable, logged, and reversible. If stage three fails, stage four does not run.

## Division of labour

The **Overseer** holds decisions: accepting contracts, approving risk, signing off deployments. The **Worker** executes bounded tasks in a credential-less sandbox. The split is deliberate — a language model should never hold production keys.

## Status

The project is **pre-alpha, milestone M1 (foundation)**. The CLI is still scaffolding. The repository holds the full plan, architecture decision records, and a per-level definition of done — all open to read and critique.

What exists: monorepo structure, shared Zod schemas, and the sandbox contract. What does not: orchestration, dashboard, and cost evaluation.


