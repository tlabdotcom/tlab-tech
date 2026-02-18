# Gitflow Workflow (Classic)

Dokumen ini menjelaskan alur kerja **Gitflow** yang dimodifikasi (Simplified Gitflow). Alur ini cocok untuk tim yang lebih besar atau proyek dengan rilis terjadwal yang ketat.

## 🌳 Struktur Branch

### Branch Utama

Branch ini berumur panjang dan selalu ada di repository.

- **`main`**: Branch ini berisi kode produksi yang stabil. Setiap commit di branch ini harus siap untuk dideploy ke environment Production.
- **`staging`**: Branch ini digunakan untuk testing di environment Staging (QA). Kode pada branch ini adalah kandidat rilis berikutnya.
- **`develop`**: Branch integrasi utama untuk pengembangan fitur.

### Branch Pendukung

Branch ini bersifat sementara dan akan dihapus setelah selesai di-_merge_.

- **Feature Branch**: Digunakan untuk mengembangkan fitur baru.
  - **Sumber**: `develop`
  - **Merge ke**: `develop`
  - **Penamaan**: `feat/nama-fitur-singkat`

- **Bugfix Branch**: Digunakan untuk memperbaiki _bug_ yang ditemukan saat pengembangan atau testing.
  - **Sumber**: `develop` (jika bug dev) atau `staging` (jika bug rilis).
  - **Merge ke**: Branch asal (`develop` atau `staging`).
  - **Penamaan**: `fix/nama-bug`

- **Hotfix Branch**: Digunakan untuk memperbaiki _bug_ kritis di produksi yang harus segera diperbaiki.
  - **Sumber**: `main`
  - **Merge ke**: `main` DAN `develop` (untuk memastikan fix tersebut juga ada di pengembangan selanjutnya).
  - **Penamaan**: `hotfix/nomor-tiket`

## 🔄 Alur Kerja Pengembangan

### 1. Memulai Fitur Baru

Semua fitur baru dimulai dari `develop`.

```bash
git checkout develop
git pull origin develop
git checkout -b feat/fitur-baru
```

### 2. Selesai Mengerjakan Fitur

Setelah fitur selesai, merge kembali ke `develop` (biasanya melalui Pull Request).

```bash
git push origin feat/fitur-baru
# Buat PR ke develop
```

### 3. Rilis ke Staging (Testing)

Secara berkala, `develop` di-merge ke `staging` untuk QA.

```bash
git checkout staging
git merge develop
git push origin staging
```

### 4. Rilis ke Main (Produksi)

Setelah `staging` stabil, merge ke `main` untuk rilis.

```bash
git checkout main
git merge staging
git tag -a v1.0.0 -m "Versi 1.0.0"
git push origin main --tags
```

## ❓ FAQ & Tantangan

### Bagaimana jika satu fitur siap tapi fitur lain di `develop` belum?

Ini adalah kelemahan utama Gitflow ("Integration Hell").

- **Solusi 1 (Feature Flags)**: Gunakan feature flags untuk mematikan fitur yang belum siap.
- **Solusi 2 (Cherry-Pick)**: Buat branch release terpisah dari `main`, lalu cherry-pick commit fitur yang siap dari `develop`. (Lihat panduan Cherry-Pick di dokumentasi Trunk-Based).

### Kapan menggunakan alur ini?

Gunakan Gitflow jika Anda membutuhkan kontrol rilis yang sangat ketat dan sejarah versi yang eksplisit di setiap tahap. Namun, untuk tim yang ingin rilis cepat, pertimbangkan penggunaan **Trunk-Based Development**.

## 📝 Conventional Commits

Kami menggunakan **Conventional Commits** untuk membuat sejarah commit yang mudah dibaca dan mendukung otomatisasi versi. Format umumnya adalah: `<tipe>(<scope>): <deskripsi>`

Silahkan baca panduan lengkapnya di [Conventional Commits](./conventional-commits.md).
