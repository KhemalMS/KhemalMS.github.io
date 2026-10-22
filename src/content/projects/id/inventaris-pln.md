---
cover:
  src: "/shots/pln-aset.webp"
  alt: "Daftar aset Inventaris PLN: 20 aset terkelompok per kategori dengan status dan lokasi"
gallery:
  - src: "/shots/pln-dashboard.webp"
    alt: "Dasbor beranda dengan ringkasan aset, pergerakan, dan pusat tindakan"
  - src: "/shots/pln-detail.webp"
    alt: "Detail aset individual dengan QR code, penempatan, dan tindakan"
tagline: "Sistem siklus hidup aset IT untuk perusahaan listrik - dari pengadaan sampai pelepasan, dengan jejak audit lengkap."
summary: "Aplikasi internal yang melacak ribuan aset individual dan massal lintas gudang, divisi, dan site proyek, dengan persetujuan bertingkat dan tanda tangan foto."
category: "Sistem Enterprise"
role: "Pengembang tunggal"
locale: id
order: 3
title: Inventaris Aset PLN Batam
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
    label: Tabel database
  - value: '16'
    label: Modul rute API
  - value: '28'
    label: Berkas uji
  - value: '25'
    label: Halaman aplikasi
---

## Masalah

Aset IT di perusahaan listrik berpindah tangan terus-menerus: dipinjam teknisi, dipasang di site, dikirim ke vendor, diperbaiki, atau dipensiunkan. Pencatatan di spreadsheet membuat pertanyaan sederhana — *"di mana UPS nomor seri ini sekarang?"* — butuh berhari-hari untuk dijawab.

Yang lebih berbahaya: tanpa jejak audit, perpindahan aset tidak bisa dipertanggungjawabkan saat pemeriksaan.

## Yang dibangun

**Dua jenis aset dalam satu sistem.** Aset individual (server, CCTV, laptop) dilacak per nomor seri. Aset massal (kabel UTP per meter, kabel fiber per roll) dilacak per unit dengan sisa yang dihitung otomatis. Keduanya berbagi alur peminjaman, perbaikan, dan mutasi yang sama.

**Persetujuan bertingkat.** Peminjaman bernilai tinggi melewati dua tahap: supervisor, lalu admin gudang. Setiap persetujuan tercatat dengan waktu dan identitas.

**Bukti foto sebagai bagian alur, bukan lampiran.** Pengambilan dan pengembalian barang mewajibkan foto kondisi. Foto dikompres di server, disimpan dengan nama yang dapat dilacak, dan muncul di riwayat pergerakan aset.

**Audit yang tidak bisa dihapus.** Setiap aksi sensitif menulis ke tabel audit yang dilindungi trigger. Arsip terpisah menyimpan data historis agar tabel kerja tetap ringan.

**Hak akses tiga lapis.** Hak per halaman, hak per fitur, dan hak pemberi persetujuan dipisah. Menambah role baru tidak memerlukan perubahan kode.

## Arsitektur

```
client/    React 19 + Vite — 25 halaman, tanpa framework UI
server/    Express — 16 modul rute, JWT, TOTP 2FA, sharp (foto)
           PostgreSQL 16 — 30 tabel + trigger audit + tampilan laporan
scripts/   update.ps1 — rollback.ps1 — status-check.ps1
```

Aplikasi berjalan sebagai layanan Windows (NSSM) di VPS internal. Prosedur pembaruan mencakup pencadangan basis data sebelum migrasi dan rollback ke commit tertentu — karena memeriksa ulang data aset setelah gagal migrasi bukan pilihan.

## Keputusan teknis yang menentukan

- **PostgreSQL, bukan MySQL.** Trigger audit, constraint, dan tipe `jsonb` untuk konfigurasi dropdown jauh lebih ringkas daripada alternatifnya.
- **Dropdown sebagai data, bukan enum.** Satuan, kondisi, tipe lokasi, dan role disimpan di tabel konfigurasi. Organisasi mengubah istilahnya sendiri tanpa rilis baru.
- **Format kode aset yang dapat dikonfigurasi.** `PLN-{YYYY}-{SEQ}` disimpan di pengaturan sistem, sehingga penomoran dapat disesuaikan dengan kebijakan internal.
- **Uji bentuk respons, bukan hanya status.** Dua puluh delapan berkas uji memeriksa kontrak respons API, karena yang merusak frontend bukan kode 500, melainkan field yang hilang.

## Hasil

Sistem dipakai di lingkungan internal untuk melacak aset lintas gudang dan site proyek. Repositori privat karena memuat konfigurasi organisasi.


