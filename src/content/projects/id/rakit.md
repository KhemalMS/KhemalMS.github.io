---
cover:
  src: "/shots/rakit.webp"
  alt: "Diagram tujuh tahap pipeline Rakit dengan gerbang mutu terukur"
tagline: "Orkestrator SDLC berbasis AI - pipeline tujuh tahap dengan gerbang mutu yang terukur, bukan sekadar generasi kode."
summary: "Platform eksperimental yang mengubah deskripsi aplikasi menjadi artefak berkunci: PRD, kontrak sistem, uji penerimaan, lalu kode yang harus lulus uji tersebut."
category: "Perkakas Developer"
role: "Perancang & pengembang"
locale: id
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
    label: Tahap pipeline
  - value: 'M1'
    label: Milestone aktif
  - value: 'MIT'
    label: Lisensi
---

## Gagasan

Alat generasi kode hari ini cepat menghasilkan sesuatu, lalu berhenti. Yang tidak dijawab: apakah hasilnya benar, apakah bisa diuji, dan siapa yang bertanggung jawab ketika salah.

Rakit mencoba membalik urutannya. Sebelum satu baris kode ditulis, sistem harus menghasilkan artefak yang dapat diperiksa manusia: kebutuhan, kontrak sistem, pemecahan tugas, dan **uji penerimaan yang dikunci**. Kode baru dianggap selesai ketika uji itu hijau.

## Tujuh tahap

1. **Kebutuhan** — `PRD.json`
2. **Desain sistem** — `CONTRACT.json`, `ARCHITECTURE.md`
3. **Pemecahan tugas** + uji penerimaan terkunci
4. **Penulisan kode** dalam sandbox dengan lingkaran hijau
5. **Tinjauan berbasis risiko** — peninjau AI dan Overseer manusia
6. **Deploy** dengan rollback otomatis
7. **Dokumentasi** dan serah terima

Setiap gerbang terukur, tercatat, dan dapat dibatalkan. Kalau tahap tiga gagal, tahap empat tidak berjalan.

## Pembagian kerja

**Overseer** memegang keputusan: menerima kontrak, menyetujui risiko, dan menandatangani deploy. **Worker** menjalankan tugas terbatas di sandbox tanpa kredensial. Pemisahan ini disengaja — model bahasa tidak boleh memegang kunci produksi.

## Status

Proyek berada di **pre-alpha, milestone M1 (fondasi)**. CLI masih berupa kerangka. Repositori berisi rencana lengkap, catatan keputusan arsitektur, dan definisi "selesai" per tingkat — semuanya terbuka untuk dibaca dan dikritik.

Bagian yang sudah ada: struktur monorepo, skema bersama dengan Zod, dan kontrak sandbox. Bagian yang belum: orkestrasi, dasbor, dan evaluasi biaya.


