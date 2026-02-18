# Code Review & SonarQube 👁️🛡️

Di TLab Tech, _Code Review_ adalah jantung dari **Continuous Improvement** kita. Ini bukan sekadar proses mencari kesalahan, melainkan sarana berbagi pengetahuan, menjaga standar kualitas, dan memastikan basis kode kita terus menjadi lebih baik setiap harinya.

Untuk menjaga objektivitas, kita menggabungkan tinjauan manusia (Human Review) dengan analisis statis otomatis menggunakan **SonarQube**.

---

## 1. Filosofi Code Review Kita

Sebelum membahas proses teknis, pastikan kamu memahami nilai-nilai dasar saat melakukan atau menerima _review_:

- **Kritik Kodenya, Bukan Orangnya:** Kita menerapkan _No-Blame Culture_. Hindari kata-kata yang menyerang personal. Gunakan "Kita" daripada "Kamu" (Contoh: _"Bagaimana kalau **kita** ubah logika ini agar lebih cepat?"_).
- **Jelaskan "Kenapa" (Why):** Jika menyarankan perubahan, sertakan alasan atau referensi _best practice_-nya.
- **The Boy Scout Rule:** Selalu tinggalkan kode dalam keadaan lebih bersih daripada saat kamu menemukannya.

---

## 2. Alur Code Review (Workflow)

Proses _review_ dimulai bahkan sebelum kamu membuat _Pull Request_ (PR).

### A. Sebelum Membuat PR (Author)

Pastikan kamu telah melakukan _self-check_ berikut:

- [ ] Kode sudah berfungsi sesuai _Acceptance Criteria_ (AC) pada tiket.
- [ ] Tidak ada peringatan dari **SonarLint** di IDE kamu.
- [ ] _Commit messages_ sudah mengikuti aturan _Conventional Commits_.
- [ ] _Branch_ sudah di-_rebase_ / di-_merge_ dengan kondisi `develop`/`main` terbaru.

### B. Saat Membuka PR (Author)

- Gunakan **PR Template** (jika ada).
- Berikan konteks: _"Apa yang berubah?"_, _"Kenapa diubah?"_, dan _"Bagaimana cara QA mengujinya?"_.
- _Tag_ minimal 1 _Engineer_ (Intermediate/Senior) sebagai _reviewer_.

### C. Saat Melakukan Review (Reviewer)

Fokuslah pada hal-hal yang **tidak bisa** dideteksi oleh SonarQube:

1. **Arsitektur & Desain:** Apakah solusi ini _scalable_? Apakah polanya sesuai dengan proyek?
2. **Business Logic:** Apakah logika ini benar-benar menyelesaikan masalah yang diminta tiket?
3. **Security (Contextual):** Apakah ada celah otorisasi bisnis yang terlewat?

::: tip 💡 Tips Memberi Komentar
Gunakan prefix untuk memperjelas niat komentarmu:

- **[BLOCKER]:** Harus diperbaiki sebelum di-_merge_ (misal: _bug_ fatal, celah keamanan).
- **[SUGGESTION]:** Saran perbaikan yang dianjurkan (misal: optimasi _query_).
- **[NITPICK]:** Hal kecil/preferensi, tidak wajib diubah (misal: typo pada komentar, penamaan variabel yang kurang pas).
  :::

---

## 3. Integrasi SonarQube (Quality Gate) 🤖

Kita menggunakan SonarQube untuk mengotomatisasi pengecekan kualitas dasar sehingga _Human Reviewer_ bisa fokus pada logika bisnis.

### Pertahanan Lapis Pertama: SonarLint (Lokal)

Wajib hukumnya menginstal _plugin_ **SonarLint** di JetBrains IDE atau VSCode kamu. SonarLint akan menganalisis kodemu secara _real-time_ saat kamu mengetik.

- **Aturan:** Jangan _commit_ kode jika SonarLint masih memberikan _warning_ warna merah (Bug/Vulnerability) atau kuning (Code Smell).

### Pertahanan Lapis Kedua: SonarQube Scanner (CI/CD Pipeline)

Saat kamu _push_ kode dan membuat PR, CI/CD _pipeline_ kita akan menjalankan pemindaian SonarQube secara menyeluruh. PR kamu **TIDAK BISA di-merge** jika gagal melewati _Quality Gate_ perusahaan.

**Standar Quality Gate TLab Tech:**
| Metrik | Syarat Lulus | Keterangan |
| :--- | :--- | :--- |
| **New Bugs** | `0` | Tidak boleh ada _bug_ baru yang terdeteksi. |
| **New Vulnerabilities** | `0` | Tidak boleh ada celah keamanan baru. |
| **New Security Hotspots** | `0` | Harus di-review secara manual jika muncul. |
| **New Code Smells** | `< 5` | Kode yang sulit di-_maintain_ harus diminimalisir. |
| **Coverage pada Kode Baru**| `>= 70%` | Kode baru wajib memiliki _Unit Test_. |
| **Duplicated Lines** | `< 3%` | Terapkan prinsip DRY (_Don't Repeat Yourself_). |

::: warning ⚠️ Penanganan Gagal Quality Gate
Jika PR kamu gagal di _Quality Gate_ SonarQube, cek _dashboard_ SonarQube dari _link_ yang tertera di _pipeline_ Gitlab/Github. Perbaiki isu yang disorot, lalu _push_ kembali (CI/CD akan berjalan otomatis).
:::

---

## 4. Resolusi & Merge

1. Jika _reviewer_ memberikan _feedback_, diskusikan atau terapkan perbaikan.
2. Balas komentar _reviewer_ dengan "Done" atau argumen balasan jika kamu punya pendekatan lain.
3. Setelah _Quality Gate_ hijau dan minimal ada **1 Approve** dari _reviewer_, PR siap di-_merge_! 🎉
