# Dependency Security Policy

Kami menggunakan Dependency-Track untuk memonitor keamanan dependency dan mencegah risiko supply chain attack.

Dependency adalah bagian dari software kita.
Jika dependency rentan, maka sistem kita juga rentan.

Dokumen ini menjelaskan standar internal penggunaan Dependency-Track di perusahaan.

::: tip Akses Dependency-Track
[https://deep-track.tlab.co.id](https://deep-track.tlab.co.id)
:::

---

# 1. Tujuan Penggunaan

Dependency-Track digunakan untuk:

- Mendeteksi vulnerability pada library pihak ketiga
- Mengurangi risiko supply chain attack
- Memastikan dependency tetap up-to-date
- Mengontrol risiko keamanan sebelum production

Security bukan hanya pada kode yang kita tulis, tetapi juga pada library yang kita gunakan.

---

# 2. Scope Monitoring

Monitoring dilakukan pada:

- Backend dependencies (npm, composer, maven, dll)
- Frontend dependencies
- Container images (jika digunakan)
- Third-party packages

Semua project wajib terdaftar dalam Dependency-Track.

---

# 3. Severity Policy

## Critical

- Wajib diperbaiki sebelum merge atau release
- Tidak boleh deploy ke production jika masih ada Critical vulnerability

## High

- Wajib dievaluasi
- Jika exploit tersedia → wajib diperbaiki
- Jika tidak bisa diperbaiki → harus ada risk acceptance yang disetujui Tech Lead

## Medium

- Direkomendasikan update
- Diprioritaskan jika berkaitan dengan sistem publik

## Low

- Monitoring saja
- Update ketika memungkinkan

---

# 4. Definition of Done Integration

Task dianggap selesai jika:

- Tidak ada Critical vulnerability
- High vulnerability sudah dievaluasi
- Tidak ada dependency yang jelas deprecated tanpa alasan

Jika dependency baru ditambahkan, wajib dipastikan tidak membawa vulnerability tinggi.

---

# 5. Flow Jika Ditemukan Vulnerability

## Langkah 1 – Identifikasi

- Cek severity
- Cek versi yang terdampak
- Cek apakah digunakan dalam code kita

## Langkah 2 – Evaluasi

- Apakah ada patch tersedia?
- Apakah ada versi terbaru yang aman?
- Apakah vulnerability bisa dieksploitasi dalam konteks sistem kita?

## Langkah 3 – Action

- Update dependency
- Ganti library jika perlu
- Atau buat risk acceptance note

---

# 6. Risk Acceptance Policy

Jika dependency tidak bisa di-update karena alasan teknis:

Wajib:

- Dokumentasikan alasan
- Jelaskan risiko
- Jelaskan mitigasi sementara
- Disetujui oleh Tech Lead

Risk acceptance tidak boleh menjadi kebiasaan.

---

# 7. Dependency Update Strategy

Disarankan:

- Minor & patch update rutin
- Major update direncanakan
- Review dependency minimal setiap 1–3 bulan
- Hindari dependency yang tidak aktif dikembangkan

Semakin lama dependency tidak diperbarui, semakin tinggi risiko keamanan.

---

# 8. CI/CD Integration

Dependency-Track terintegrasi dalam pipeline:

1. Build
2. Dependency scan
3. Vulnerability evaluation
4. Deploy (jika lolos policy)

Jika ada Critical vulnerability → pipeline dapat dihentikan sesuai policy.

---

# 9. Developer Responsibility

Setiap engineer wajib:

- Tidak menambahkan dependency sembarangan
- Menghindari library yang tidak populer atau tidak maintain
- Mengevaluasi dampak dependency baru
- Memperhatikan alert vulnerability

Tambahkan dependency hanya jika benar-benar diperlukan.

---

# 10. Anti-Pattern (Dilarang)

- Mengabaikan vulnerability
- Menggunakan library yang sudah deprecated
- Menambahkan dependency hanya untuk fitur kecil
- Tidak menghapus dependency yang sudah tidak digunakan

Dependency yang tidak digunakan tetap bisa menjadi celah keamanan.

---

# 11. Best Practice

- Gunakan versi stable
- Hindari alpha/beta di production
- Minimalkan jumlah dependency
- Gunakan library dengan komunitas aktif
- Audit dependency secara berkala

Prinsip:

> Semakin sedikit dependency, semakin kecil attack surface.

---

# 12. Tujuan Jangka Panjang

Dengan konsistensi penggunaan Dependency-Track, kita ingin:

- Mengurangi risiko keamanan
- Menghindari supply chain attack
- Menjaga reputasi perusahaan
- Meningkatkan kepercayaan klien

---

# Closing

Security bukan hanya firewall dan server configuration.
Security dimulai dari dependency yang kita pilih.

Dependency-Track membantu kita memonitor risiko, tetapi keputusan tetap ada pada engineer.

Gunakan dengan tanggung jawab dan profesionalisme.
