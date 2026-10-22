---
cover:
  src: "/shots/v1-mobile.webp"
  alt: "Antarmuka kasir Kasir-AI v1: katalog produk per kategori dan keranjang pesanan"
gallery:
  - src: "/shots/v1-dashboard.webp"
    alt: "Dasbor admin Kasir-AI v1 dengan ringkasan penjualan dan manajemen produk"
  - src: "/shots/v1-api.webp"
    alt: "Eksplorasi API Kasir-AI v1"
tagline: "Generasi pertama sistem kasir - monorepo tiga platform dengan API Express, dashboard React, dan aplikasi Flutter."
summary: "Versi open source yang menjadi dasar Kasir-AI v2. Menunjukkan struktur awal sistem, skema database relasional, dan alur operasional kafe."
category: "Sistem Point of Sale"
role: "Pengembang tunggal"
locale: id
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
    label: Modul rute API
  - value: '27'
    label: Tabel database
  - value: '15'
    label: Halaman admin
  - value: '3'
    label: Platform
---

## Konteks

Ini versi publik pertama Kasir-AI. Tujuannya sederhana: membuktikan bahwa satu tim kecil bisa mengelola produk, pesanan, staf, shift, dan laporan dari satu sistem tanpa spreadsheet.

Versi ini sudah tidak dikembangkan aktif. Ia dipertahankan sebagai catatan bagaimana arsitektur v2 lahir — dan sebagai titik pembanding jujur antara rencana awal dan hasil akhirnya.

## Isi sistem

- **API Express** dengan 23 modul rute: produk, kategori, pesanan, inventaris, staf, shift, cabang, pengeluaran, pembayaran, laporan keuangan, laporan staf, laporan pajak, dan unggahan berkas.
- **Skema MySQL** dengan 27 tabel, termasuk varian produk, bahan baku, batch inventaris, absensi, gaji staf, dan riwayat penyesuaian stok.
- **Dashboard React** dengan 15 halaman: dasbor, kasir, dapur, produk, inventaris, transaksi, staf, cabang, laporan, pengeluaran, pengaturan, profil, mulai shift, tutup shift, dan login.
- **Aplikasi Flutter** untuk perangkat Android kasir dan dapur.

## Yang berubah di v2

Banyak keputusan di sini terbukti terlalu ringan untuk pemakaian nyata:

| v1 | v2 | Alasan |
| --- | --- | --- |
| Express + Drizzle | NestJS 11 | Butuh modul, validasi, dan DI yang jelas saat modul melewati 20 |
| MySQL | PostgreSQL | Transaksi, constraint, dan tipe data uang lebih ketat |
| React + Vite | Next.js 16 | Butuh server component dan rute berbasis berkas |
| Provider | Riverpod + Drift | Offline-first butuh state yang dapat diuji |
| Tanpa realtime | Socket.IO | Tiket dapur harus sampai tanpa refresh |

Karena alasan itu, v2 dibangun ulang dari nol, bukan ditambal.

## Kontribusi

Repositori terbuka untuk dibaca dan dipelajari. Skema database dan modul rute adalah bagian yang paling berguna sebagai referensi: keduanya memperlihatkan bentuk lengkap domain operasional kafe.


