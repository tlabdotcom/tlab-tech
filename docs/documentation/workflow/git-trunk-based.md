# Trunk-Based Development Workflow

Dokumen ini menjelaskan alur kerja **Trunk-Based Development** yang disesuaikan. Alur ini cocok untuk tim yang ingin bergerak cepat dengan integrasi berkelanjutan (CI/CD) yang kuat.

## 🌳 Struktur Branch

### Branch Utama

- **`main`**: Branch produksi (Stable). **Setiap fitur baru dibuat dari sini.**
- **`staging`**: Environment QA/Testing. Kode di sini bersifat sementara (bisa di-reset) dan digunakan untuk validasi sebelum rilis.
- **`develop`**: Environment Integrasi (Opsional). Digunakan jika tim butuh menguji gabungan beberapa fitur sebelum ke staging.

### Branch Fitur & Hotfix

Semua branch pengembangan bersifat sementara.

- **Feature Branch**:
  - **Sumber**: `main` (Selalu ambil dari produksi terbaru).
  - **Testing**: Merge ke `develop` / `staging` untuk dites QA.
  - **Rilis**: Merge kembali ke `main` setelah lulus QA.
  - **Penamaan**: `feat/nama-fitur`

- **Hotfix Branch**:
  - **Sumber**: `main`
  - **Penamaan**: `hotfix/nama-masalah`
  - **Alur**: Sama seperti feature branch, prioritaskan merge ke `main` setelah fix diverifikasi.

## 🔄 Alur Kerja (Workflow)

Berikut adalah langkah-langkah mengembangkan fitur agar rilis tetap bersih:

1.  **Mulai dari Main**:
    Pastikan branch lokal Anda _clean_ dan update dari `main`.

    ```bash
    git checkout main
    git pull origin main
    git checkout -b feat/fitur-baru
    ```

2.  **Development**:
    Lakukan coding dan commit seperti biasa di branch `feat/fitur-baru`.

3.  **Testing (QA)**:
    Saat fitur siap dites, **merge branch fitur ke environment testing** (jangan merge sebaliknya!).

    ```bash
    # Pindah ke staging (atau develop)
    git checkout staging
    git pull origin staging

    # Merge fitur Anda untuk dites
    git merge feat/fitur-baru
    git push origin staging
    ```

    > ⚠️ **PENTING**: Branch `staging` / `develop` HANYA untuk menampung kode testing. Jangan pernah merge `staging` ke `main`.

4.  **Revisi (Jika ada bug)**:
    Perbaiki bug di branch `feat/fitur-baru`, lalu ulangi proses merge ke `staging`.

5.  **Rilis ke Produksi**:
    Setelah fitur **100% OK** dan disetujui QA:
    - Buat **Pull Request (PR)** dari `feat/fitur-baru` ke `main`.
    - Setelah merge, fitur tersebut resmi dirilis.
    - Hapus branch `feat/fitur-baru`.

### Keuntungan Alur Ini:

- **Isolasi Fitur**: Fitur A dan Fitur B tidak saling tergantung. Jika Fitur A siap tapi Fitur B belum, Fitur A bisa langsung merge ke `main` dan rilis.
- **Produksi Stabil**: `main` hanya berisi kode yang sudah teruji.
- **Tidak Perlu Cherry-Pick**: Masalah "Partial Release" otomatis teratasi.

## ❓ FAQ

### Kapan menggunakan `develop`?

Gunakan `develop` sebagai "pusat integrasi" jika banyak developer bekerja bersamaan dan perlu memastikan fitur mereka tidak saling bentrok sebelum masuk ke `staging`.

### Bagaimana jika konflik saat merge ke `main`?

Sebelum PR ke `main`, lakukan `git pull origin main` (rebase) di branch fitur Anda untuk menyelesaikan konflik secara lokal.

### Bagaimana mengatasi konflik CI/CD (`.gitlab-ci.yml`) saat merge?

Masalah ini umum terjadi jika file CI/CD Anda berbeda kontennya antara branch `main` (Production) dan `develop` (Development). Saat merge fitur dari `main` ke `develop`, konfigurasi `main` seringkali menimpa `develop`, menyebabkan pipeline gagal atau salah environment.

**Solusi: Buat File CI/CD Identik!**
Jangan simpan perbedaan konfigurasi (seperti URL API, Environment) di dalam kode sumber (`hardcoded`). Gunakan **CI/CD Variables** (Environment Variables) di platform CI Anda (GitLab/GitHub Actions).

**Contoh Benar (Menggunakan Variable/Rules):**
Gunakan satu file `.gitlab-ci.yml` yang sama di semua branch, tapi bedakan eksekusinya menggunakan `rules`.

## 📝 Conventional Commits

Kami menggunakan **Conventional Commits** untuk membuat sejarah commit yang mudah dibaca dan mendukung otomatisasi versi. Format umumnya adalah: `<tipe>(<scope>): <deskripsi>`

Silahkan baca panduan lengkapnya di [Conventional Commits](./conventional-commits.md).
