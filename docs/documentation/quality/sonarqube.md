# SonarQube Standard

Kami menggunakan SonarQube sebagai alat utama untuk menjaga kualitas kode, mendeteksi bug, dan mengurangi technical debt sebelum masuk ke production.

Dokumen ini menjelaskan standar internal penggunaan [SonarQube](https://sonarqube.tlab.co.id/) di perusahaan.

::: tip Akses SonarQube
[https://sonarqube.tlab.co.id](https://sonarqube.tlab.co.id)
:::

---

# 1. Tujuan Penggunaan

SonarQube digunakan untuk:

- Mendeteksi bug sebelum production
- Mengidentifikasi code smell
- Mencegah security vulnerability
- Mengontrol duplikasi kode
- Menjaga coverage testing
- Mengontrol technical debt

SonarQube bukan formalitas.
Ia adalah bagian dari sistem quality enforcement.

---

# 2. Quality Gate Policy

Pull Request tidak boleh di-merge jika gagal Quality Gate.

## Standar Quality Gate Internal

Minimal harus memenuhi:

- No **Blocker** issues
- No **Critical** issues
- No new Security Vulnerability
- Code coverage ≥ 5% (untuk project yang memiliki testing)
- Tidak ada peningkatan duplicated code signifikan

Jika Quality Gate gagal:

- Developer wajib memperbaiki
- Tidak boleh bypass tanpa persetujuan Tech Lead

---

# 3. Severity Level & Action

## Blocker

- Wajib diperbaiki sebelum merge
- Tidak ada toleransi

## Critical

- Wajib diperbaiki
- Jika ada alasan teknis kuat → diskusi dengan Lead

## Major

- Harus dievaluasi
- Perbaiki jika berdampak pada maintainability

## Minor

- Opsional, namun tetap direkomendasikan diperbaiki

## Info

- Tidak wajib, hanya rekomendasi

---

# 4. Definition of Done Integration

Sebuah task dianggap selesai jika:

- Lulus linting
- Lulus build
- Lulus unit test (jika ada)
- Lulus SonarQube Quality Gate
- Tidak menambah critical issue baru

Jika salah satu gagal → task belum selesai.

---

# 5. Code Smell Policy

Code smell bukan error, tetapi indikasi potensi masalah jangka panjang.

Engineer harus:

- Mengurangi kompleksitas fungsi
- Menghindari nested logic berlebihan
- Menghindari duplicate logic
- Memisahkan tanggung jawab dengan jelas

Jika Sonar menunjukkan technical debt meningkat, engineer wajib melakukan refactor ringan sebelum merge.

---

# 6. Security Hotspot Handling

Security Hotspot harus:

1. Direview
2. Ditentukan apakah aman atau tidak
3. Diberi komentar yang jelas

Jangan ignore tanpa analisis.

---

# 7. Coverage Policy

Jika project memiliki unit test:

- Minimal coverage 5%
- Tidak boleh menurunkan coverage secara signifikan
- Feature baru sebaiknya memiliki test

Jika project belum memiliki testing:

- Sonar tetap digunakan untuk bug & smell detection

---

# 8. Clean as You Code Principle

Kami menerapkan prinsip:

> Clean as You Code

Artinya:

- Tidak wajib membersihkan seluruh legacy code
- Tetapi setiap perubahan tidak boleh memperburuk kualitas
- Setiap code baru harus bersih

---

# 9. Developer Responsibility

Setiap engineer wajib:

- Mengecek hasil scan sebelum merge
- Tidak mengabaikan issue penting
- Tidak men-disable rule tanpa diskusi
- Bertanggung jawab atas issue yang muncul dari code miliknya

---

# 10. Tech Lead Responsibility

Tech Lead bertanggung jawab untuk:

- Menentukan Quality Gate
- Mengevaluasi rule yang relevan
- Menghindari rule yang terlalu menghambat produktivitas
- Menjaga keseimbangan antara quality & delivery

---

# 11. CI/CD Integration

SonarQube terintegrasi dalam pipeline:

1. Build
2. Test
3. Sonar Scan
4. Quality Gate Check
5. Deploy (jika lulus)

Jika Quality Gate gagal → pipeline berhenti.

Quality bukan pilihan, tetapi sistem.

---

# 12. Anti-Pattern (Dilarang)

- Mengabaikan issue tanpa alasan
- Menggunakan `// NOSONAR` sembarangan
- Menonaktifkan rule untuk mempermudah merge
- Menganggap Sonar hanya formalitas

---

# 13. Tujuan Jangka Panjang

Dengan konsistensi penggunaan SonarQube, kita ingin:

- Menurunkan bug production
- Mengurangi technical debt
- Meningkatkan maintainability
- Meningkatkan profesionalisme engineering

---

# Closing

SonarQube adalah alat bantu.
Kualitas tetap berasal dari engineer.

Gunakan sebagai panduan untuk menulis kode yang lebih baik, bukan sebagai penghalang pekerjaan.
