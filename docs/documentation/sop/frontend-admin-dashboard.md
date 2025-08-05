# SOP: Frontend Engineer – Pembuatan Admin Dashboard

> Terakhir diperbarui: 2025-08-05

---

## 🎯 Tujuan

Dokumen ini memberikan panduan teknis dalam membangun **Admin Dashboard** berbasis komponen dengan shadcn, baik di React maupun Vue. Fokus pada performa, konsistensi UI, keamanan, dan skalabilitas.


---

## 🧑‍💻 Tanggung Jawab

Frontend Engineer bertanggung jawab terhadap:

* Implementasi UI dashboard modular berbasis komponen shadcn
* Validasi input form menggunakan `zod` (React) atau `VeeValidate` (Vue)
* State management, akses API, serta pengelolaan error dan loading
* Penggunaan dark mode, role-based access, dan responsivitas
* Kolaborasi lintas tim (backend, QA, designer)

---

## 🛠️ Stack Teknologi

| Area         | React                              | Vue                                               |
| ------------ | ---------------------------------- | ------------------------------------------------- |
| Framework    | React (Vite)                       | Vue 3 (Vite)                                      |
| UI Library   | shadcn/ui (Tailwind based)         | shadcn-vue                                        |
| Styling      | Tailwind CSS                       | Tailwind CSS                                      |
| Validation   | [Zod](https://zod.dev/)            | [VeeValidate](https://vee-validate.logaretm.com/) |
| State        | Zustand / React Query              | Pinia / Vue Query                                 |
| Routing      | React Router                       | Vue Router                                        |
| API          | Axios / tRPC                       | Axios / composables                               |
| Type Checker | TypeScript                         | TypeScript                                        |
| Animasi      | Framer Motion                      | VueUse / Transition                               |
| Testing      | Vitest / Testing Library / Cypress | Vitest / Cypress                                  |

---
## 🗂️ Struktur Modular

```txt
📁 modules/
│   ├── 📁 users/
│   │   ├── constants/
│   │   ├── services/
│   │   ├── stores/
│   │   ├── router/
│   │   ├── types/
│   │   └── views/
│   ├── 📁 roles/
│   ├── 📁 dashboard/
│   └── 📁 settings/

📁 components/
│   ├── layout/        → Sidebar, Navbar, Footer
│   ├── form/          → Input, Select, DatePicker, etc
│   └── table/         → Table, Pagination, Filter UI

📁 composables/ atau 📁 hooks/
📁 services/           → API base, auth, interceptors
📁 pages/              → /login, /dashboard, etc
📁 plugins/            → Axios, Notification, Auth
📁 utils/              → formatter, validator, helpers
📁 locales/            → i18n
📁 tests/              → unit, e2e
```
---

## ✅ Checklist Fitur

### 1. Struktur & Routing

* [ ] Role-based route (middleware/auth)
* [ ] Dynamic route + breadcrumbs

### 2. Komponen Umum

* [ ] Sidebar (collapseable)
* [ ] Navbar (profile, notification)
* [ ] Table (pagination, sorting)
* [ ] Modal, Toast, Tabs, Accordion

### 3. Form & Validasi

* [ ] Gunakan `zod` / `vee-validate`
* [ ] Default error state, helper text, focus
* [ ] Integrasi form state + loading
* [ ] Sanitasi input (XSS, unsafe HTML)

### 4. UI/UX

* [ ] Konsisten spacing, warna, ukuran
* [ ] Dark mode support
* [ ] Skeleton/loading state

### 5. Keamanan

* [ ] Middleware role checking
* [ ] Validasi sisi frontend & backend
* [ ] Proteksi XSS, CSRF (via cookie/token)

### 6. Kinerja

* [ ] Lazy load heavy pages/table
* [ ] Minimal re-render & re-fetch
* [ ] Bundle analysis (jika perlu)

### 7. Testing

* [ ] Unit test logic, store, composables
* [ ] Integration test form & table
* [ ] End-to-end test (login, CRUD, dll)

### 8. CI/CD

* [ ] Preview deploy aktif (Vercel/Netlify)
* [ ] Jalankan test otomatis sebelum merge

---

## 🎯 Target Keberhasilan

| Aspek        | Target                                       |
| ------------ | -------------------------------------------- |
| Performa     | Waktu load < 3 detik, Lighthouse tidak wajib |
| UX           | Navigasi intuitif & responsif                |
| Validasi     | Error terdeteksi sebelum kirim ke API        |
| Maintainable | Modular, low coupling                        |
| Reusable     | Komponen mudah dipakai ulang                 |
| Keamanan     | Role-based access & sanitasi input           |

---

## 📚 Referensi Tambahan

* [shadcn/ui (React)](https://ui.shadcn.com/)
* [shadcn-vue](https://www.shadcn-vue.com/)
* [Zod Validator](https://zod.dev/)
* [VeeValidate](https://vee-validate.logaretm.com/)
* [Tailwind Dashboard Templates](https://tailwindcomponents.com/components/dashboard)
* [Dashboard UX Guide](https://uxdesign.cc/dashboard-design-best-practices-21142352e5d3)

---

> Untuk pertanyaan atau pembaruan SOP, silakan hubungi Head of Web Development Section.