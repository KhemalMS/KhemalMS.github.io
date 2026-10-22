# Khemal Muhammad Sofian — Portfolio

Situs portofolio pribadi. Dibangun dengan Astro 7, Tailwind CSS 4, dan tanpa
framework UI di sisi klien.

**Live:** https://khemalms.github.io

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type + a11y diagnostics
npm run build    # output statis di dist/
```

Node 24 (lihat `engines` di `package.json`).

## Struktur

```
src/
  content/projects/{id,en}/*.md   Case study per proyek, dua bahasa
  data/site.ts                    Profil, skill, tautan sosial
  i18n/                           String UI + helper lokalisasi
  layouts/Base.astro              Head, meta OG, hreflang, JSON-LD
  components/                     Nav, Hero, ProjectCard, SkillGrid, dst.
  pages/                          Rute Indonesia (/), Inggris (/en/)
  styles/global.css               Token warna Coffee & Cream
public/
  shots/                          Tangkapan layar proyek (WebP)
  fonts/                          Inter variable (self-hosted)
```

## Bahasa

Bahasa Indonesia adalah default (`/`); Inggris di `/en/`. Rute baru harus
ditambahkan di kedua pohon `src/pages` dan `src/pages/en`. Konten proyek
memakai pasangan berkas `<slug>.md` di `content/projects/id` dan `.../en`.

## Proyek yang ditampilkan

Detail ditulis di `src/content/projects`. Repositori sebagian bersifat privat;
halaman case study memuat arsitektur dan tangkapan layar dari sistem yang
berjalan.

## Deploy

Push ke `main` atau `astro` memicu `.github/workflows/deploy.yml`: build,
`astro check`, lalu publikasi ke GitHub Pages.

## Lisensi

Isi, tangkapan layar, dan teks © Khemal Muhammad Sofian. Kode situs ini
dirilis untuk keperluan rujukan; tidak untuk dipakai ulang sebagai portofolio
pribadi orang lain.
