# Git Workflow Guidelines

Di **TLab Tech**, kami mendukung dua pendekatan Git Workflow utama tergantung pada kebutuhan proyek dan tim Anda.

Silakan pilih panduan yang paling sesuai dengan tim/proyek Anda:

## 1. Trunk-Based Development (Recommended) 🚀

Ini adalah alur kerja modern yang **sangat disarankan** untuk sebagian besar proyek kami.

- **Cocok untuk**: Tim yang ingin rilis cepat, CI/CD otomatis, dan menghindari konflik merge yang rumit.
- **Ciri Utama**:
  - Fitur dibuat langsung dari `main`.
  - `develop` dan `staging` hanya untuk testing sementara.
  - Masalah "Partial Release" sangat mudah diatasi.

👉 **[Baca Panduan Trunk-Based Development](./git-trunk-based.md)**

---

## 2. Gitflow (Classic) 🛡️

Ini adalah alur kerja tradisional yang lebih ketat.

- **Cocok untuk**: Proyek besar dengan siklus rilis yang sangat terstruktur dan jarang (misal: rilis per bulan).
- **Ciri Utama**:
  - Fitur dibuat dari `develop`.
  - Struktur branch lebih kompleks (`develop -> release -> main`).
  - Rentan terhadap "Integration Hell" jika fitur menumpuk di `develop`.

👉 **[Baca Panduan Gitflow](./git-gitflow.md)**

---

## 📝 Referensi Tambahan

- **[Conventional Commits](./conventional-commits.md)**: Standar penulisan pesan commit yang kami gunakan.
