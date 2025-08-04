# SOP: Frontend Engineer – Pembuatan Website Company Profile

> Terakhir diperbarui: 2025-08-04

---

## 🎯 Tujuan

Dokumen ini bertujuan untuk memberikan panduan teknis dan prosedural dalam membangun website **Company Profile** yang modern, modular, dan optimal untuk performa, SEO, serta maintainability.

---

## 🧑‍💻 Tanggung Jawab

Frontend Engineer bertanggung jawab terhadap:

* Implementasi desain UI/UX ke dalam komponen interaktif dan responsive.
* Optimasi performa (kecepatan, ukuran bundle, loading).
* SEO teknikal dan aksesibilitas.
* Modularisasi fitur/menu berbasis folder.
* Kolaborasi dengan backend, designer, dan QA.

---

## 🛠️ Stack Teknologi

| Area         | Tools/Library                     |
| ------------ | --------------------------------- |
| Framework    | Nuxt 3 (Vue 3) / Next.js (React)  |
| Styling      | Tailwind CSS                      |
| State        | Pinia (Nuxt), Context API (Next)  |
| Icon         | Lucide, Heroicons, inline SVG     |
| Animasi      | Framer Motion / VueUse            |
| Type Checker | TypeScript                        |

---

## 🗂️ Struktur Modular

```
📁 public/ (Next.js) atau 📁 static/ (Nuxt)
│   ├── 📁 images/
│   ├── 📁 fonts/
│   ├── 📁 icons/
│   ├── 📁 sitemap/
│   ├── robots.txt
│   └── favicon.ico

📁 assets/
│   ├── 📁 images/
│   ├── 📁 fonts/
│   └── 📁 styles/

📁 components/
│   ├── 📁 common/
│   ├── 📁 layout/
│   └── 📁 ui/

📁 composables/ (Nuxt) atau 📁 hooks/ (Next)
│   └── useXXX.ts

📁 layouts/
│   └── default.vue / default.tsx
│   └── empty.vue / empty.tsx

📁 middleware/ (Nuxt) atau 📁 middlewares/ (Next)
│   └── auth.ts
│   └── guest.ts

📁 modules/
│   ├── 📁 home/
│   │   ├── 📁 constants/
│   │   ├── 📁 router/
│   │   ├── 📁 stores/
│   │   ├── 📁 types/
│   │   └── 📁 views/
│   ├── 📁 news/
│   │   ├── 📁 constants/
│   │   ├── 📁 router/
│   │   ├── 📁 services/
│   │   ├── 📁 stores/
│   │   ├── 📁 types/
│   │   └── 📁 views/
│   ├── 📁 gallery/
│   └── 📁 contact/

📁 pages/ (Next) atau 📁 app/pages/ (Nuxt)
│   ├── index.vue / index.tsx
│   ├── 404.vue / 404.tsx
│   └── sitemap.xml.ts

📁 plugins/
│   └── axios.ts
│   └── analytics.ts

📁 utils/
│   └── formatter.ts
│   └── validator.ts

📁 types/
│   └── env.d.ts
│   └── global.d.ts

📁 services/
│   └── api.ts
│   └── i18n.ts
│   └── seo.ts

📁 locales/
│   └── en/
│   └── id/

📁 tests/
│   └── unit/
│   └── e2e/

📁 documentation/
│   ├── frontend.md
│   ├── backend.md
│   ├── fullstack.md

📄 nuxt.config.ts / next.config.js
📄 tailwind.config.js
📄 tsconfig.json
📄 .eslintrc.js
📄 .prettierrc
📄 .gitignore
📄 package.json
📄 README.md
```

---

## ✅ Checklist Implementasi

### 1. **Persiapan**

* [ ] Setup repo Git
* [ ] Setup environment `.env` dan konfigurasi dasar Nuxt/Next
* [ ] Buat `site.config.ts/json` berisi meta dan navigasi

### 2. **Struktur Halaman & Komponen**

* [ ] Halaman: Home, About, Services, News, Gallery, Contact
* [ ] Komponen Umum: Navbar, Footer, BaseButton, BaseCard
* [ ] Komponen Modular: per folder module

### 3. **Responsiveness & Aksesibilitas**

* [ ] Layout mobile-first dengan Tailwind
* [ ] Navigasi keyboard, semantic HTML, alt image, label input

### 4. **SEO & Metadata**

* [ ] `title`, `description`, `og:title`, `og:image`, `canonical`
* [ ] Sitemap (`/sitemap.xml`) dan `robots.txt`
* [ ] Schema.org: `Organization`, `Website`, `LocalBusiness`

### 5. **Optimisasi Performa**

* [ ] Lighthouse score minimal 90 (ideal 100)
* [ ] Lazy-load gambar besar, gunakan format WebP
* [ ] Ukuran halaman < 1MB, bundle < 300kb

### 6. **Keamanan & Validasi**

* [ ] Gunakan CAPTCHA (Google reCAPTCHA atau hCaptcha) pada form
* [ ] Validasi dan sanitasi input dari user (frontend + backend)
* [ ] Enkripsi data sensitif saat disimpan di localStorage/cookies
* [ ] Gunakan Content Security Policy (CSP)

### 7. **CI/CD & Deployment**

* [ ] Preview deploy aktif (Vercel/Netlify)
* [ ] Gunakan ENV variable, tanpa hardcode token
* [ ] Auto-deploy on push ke `main` atau `release/*`
* [ ] Gunakan GitHub Actions atau sejenis untuk integrasi otomatis

### 8. **Error Handling & Logging**

* [ ] Buat halaman error custom (404, 500)
* [ ] Tambahkan notifikasi jika terjadi error API/form
* [ ] Integrasi tool monitoring: Sentry, LogRocket (opsional)

### 9. **Form UX Enhancement**

* [ ] Validasi real-time dengan feedback yang jelas
* [ ] Tampilkan loader/progress saat proses pengiriman
* [ ] Tampilkan pesan sukses/gagal yang informatif

---

## 🎯 Target Keberhasilan

| Aspek          | Target                                          |
| -------------- | ----------------------------------------------- |
| Lighthouse     | Skor 90–100 semua kategori                      |
| SEO            | Terindex Google via Search Console              |
| Load Speed     | < 2 detik (PageSpeed / GTMetrix)                |
| Responsiveness | Semua device, tanpa overflow/scroll horizontal  |
| Maintainable   | Modular, reusable, dan mudah dimodifikasi       |
| Analytics      | Tracking aktif via Google Analytics / Plausible |

---

## 📄 Dokumentasi Tambahan

* `README.md`: instruksi setup, build, deploy
* `CONTRIBUTING.md`: flow kontribusi & aturan coding (opsional)
* Komentar fungsional di semua file kompleks
* Catatan SEO, Sitemap, Analytics Tracking

## 📚 Referensi Tambahan

* [Frontend Performance Best Practices – web.dev](https://web.dev/fast/)
* [Nuxt SEO Guide](https://nuxt.com/docs/seo)
* [Next.js SEO Checklist](https://www.datocms.com/blog/next-js-seo)
* [Google Structured Data Testing Tool](https://search.google.com/test/rich-results)

---

## 📌 Penutup

Dengan mengikuti SOP ini, website company profile akan:

* Tersusun rapi dan modular
* Siap scale dan maintain
* Cepat, SEO-ready, dan tampil profesional

> Untuk pertanyaan atau pembaruan SOP, silakan hubungi Head of Web Development Section.
