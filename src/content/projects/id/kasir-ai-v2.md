---
cover:
  src: "/shots/v2-reports.webp"
  alt: "Dasbor laporan penjualan Kasir-AI v2: pendapatan bersih, laba kotor, grafik per jam, dan produk terlaris"
gallery:
  - src: "/shots/v2-dashboard.webp"
    alt: "Dasbor ringkasan harian dengan tren penjualan dan ringkasan AI"
  - src: "/shots/v2-pos.webp"
    alt: "Aplikasi kasir Flutter: katalog menu dan keranjang pesanan aktif"
  - src: "/shots/v2-kds.webp"
    alt: "Kitchen Display System menampilkan tiket pesanan dapur"
  - src: "/shots/v2-pos-shift.webp"
    alt: "Layar lanjutkan shift kasir dengan PIN 6 digit"
tagline: "Sistem kasir offline-first untuk kafe dan restoran - berjalan di perangkat kasir, tetap benar saat jaringan putus."
summary: "Monorepo dengan API NestJS, dashboard Next.js, dan aplikasi Flutter yang menyimpan transaksi lokal lalu menyinkronkan saat koneksi kembali."
category: "Sistem Point of Sale"
role: "Arsitek & pengembang tunggal"
locale: id
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
    label: Modul API
  - value: '14'
    label: Fitur mobile
  - value: '13'
    label: Halaman dashboard
  - value: '2 lapis'
    label: Sinkronisasi
---

## Masalah

Kasir di kafe sering kehilangan transaksi ketika internet mati. Aplikasi berbasis web yang bergantung penuh pada server berhenti bekerja tepat saat antrean sedang panjang — dan pemilik tidak tahu berapa uang yang seharusnya masuk.

Kasir-AI v2 dirancang dengan asumsi jaringan **tidak dapat dipercaya**. Perangkat kasir harus bisa membuka shift, menjual, mencetak struk, dan menutup shift tanpa pernah menyentuh server.

## Pendekatan

**Offline-first di perangkat.** Aplikasi Flutter menyimpan produk, pesanan, dan shift di SQLite lewat Drift. Setiap transaksi ditulis lokal lebih dulu, lalu masuk antrean sinkronisasi. Antrean ini yang bertahan saat aplikasi ditutup paksa atau baterai habis.

**Server sebagai sumber kebenaran, bukan jalur kritis.** API NestJS menerima batch dari antrean, memvalidasi ulang stok, dan mengembalikan konflik secara eksplisit. Kasir tidak pernah menunggu respons server untuk menyelesaikan penjualan.

**Realtime hanya untuk hal yang tidak boleh tertunda.** Socket.IO dipakai untuk tiket dapur (KDS) dan notifikasi lintas perangkat. Kalau socket mati, aplikasi tetap berjalan dan kembali sinkron saat tersambung.

**Uang tidak boleh dibulatkan asal-asalan.** Semua nominal disimpan sebagai integer rupiah. Perhitungan pajak, diskon, dan kembalian dikerjakan di satu modul bersama yang dipakai server dan klien, sehingga struk dan laporan tidak pernah berselisih.

## Arsitektur

```
apps/
  api/          NestJS 11 — 27 modul, Drizzle ORM, PostgreSQL, Redis
  backoffice/   Next.js 16 — 13 area dashboard (produk, staf, laporan, KDS)
  pos/          Flutter — 14 fitur, Drift (SQLite), printer Bluetooth
infra/
  docker-compose.yml  postgres — redis — api — backoffice — nginx
```

Deployment memakai satu berkas `docker-compose.yml`. Postgres dan API tidak membuka port ke host — hanya nginx yang terekspos, dengan volume terpisah untuk unggahan dan pencadangan terjadwal.

## Keputusan teknis yang menentukan

- **Drift, bukan penyimpanan kunci-nilai.** Keranjang butuh kueri relasional (harga per varian, stok bahan, diskon per kategori). Menyimpannya sebagai JSON akan memaksa logika bisnis ditulis ulang di klien.
- **Drizzle, bukan ORM berbasis dekorator.** Skema tetap TypeScript, tapi migrasi yang dihasilkan bisa dibaca dan diedit manusia — penting ketika kolom uang salah tipe.
- **Idempotensi kunci transaksi.** Setiap pesanan membawa `clientGeneratedId`. Server menolak duplikat, sehingga pengiriman ulang antrean tidak pernah membuat dua struk.
- **Shift sebagai batas transaksi.** Membuka dan menutup shift bukan fitur tambahan; ia yang menjelaskan selisih kas dan menjadi dasar laporan harian.

## Hasil

Sistem berjalan di lingkungan cabang dengan perangkat Android dan printer thermal Bluetooth. Uji lapangan mencakup skenario jaringan terputus total, dua kasir pada satu cabang, dan penutupan shift dengan selisih kas.

Repositori bersifat privat karena memuat konfigurasi dan data operasional. Tangkapan layar di halaman ini berasal dari sistem yang berjalan dengan data contoh.


