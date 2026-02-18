# Engineering Principles

> Dokumen ini adalah fondasi cara berpikir dan standar perilaku engineering di perusahaan.
> Semua engineer (Backend, Frontend, Fullstack) wajib memahami dan menerapkan prinsip ini.

---

## 1. Code is a Long-Term Asset

Code bukan hanya untuk menyelesaikan task hari ini.
Code adalah aset perusahaan yang harus:

- Mudah dibaca
- Mudah dipelihara
- Mudah dikembangkan
- Aman
- Tahan terhadap perubahan

Jika sebuah solusi cepat tetapi menyulitkan 6 bulan ke depan, maka itu bukan solusi yang baik.

---

## 2. Readability Over Cleverness

Kita mengutamakan:

- Kode yang jelas
- Nama variabel yang deskriptif
- Struktur yang konsisten
- Tidak menggunakan trik yang membingungkan

Hindari:

- One-liner kompleks
- Magic number
- Singkatan yang tidak jelas
- Logic yang sulit diikuti

Rule sederhana:

> Jika engineer lain butuh waktu lama memahami kode kita, berarti ada yang salah.

---

## 3. Consistency is Power

Konsistensi lebih penting daripada preferensi pribadi.

Standar yang wajib diikuti:

- Naming convention
- Folder structure
- REST API format
- Response format
- Database naming
- Git workflow

Jangan membuat standar baru sendiri tanpa diskusi tim.

---

## 4. Security by Default

Security bukan tambahan, tetapi default behavior.

Wajib:

- Tidak commit secret
- Tidak expose API key di frontend
- Validasi input di server
- Sanitasi data
- Gunakan hashing untuk password
- Gunakan role & permission dengan benar

Jika ragu apakah sesuatu aman atau tidak → anggap itu tidak aman.

---

## 5. Performance Awareness

Setiap engineer harus sadar dampak performa dari code yang dibuat.

Frontend:

- Hindari re-render berlebihan
- Lazy load jika perlu
- Jangan fetch data berulang

Backend:

- Hindari N+1 query
- Gunakan pagination
- Gunakan indexing
- Batasi response size

Performance bukan hanya tugas DevOps.

---

## 6. Simplicity Over Complexity

Solusi sederhana lebih mudah:

- Dipahami
- Diperbaiki
- Dikembangkan

Jangan over-engineer.

Gunakan prinsip:

- YAGNI (You Aren’t Gonna Need It)
- KISS (Keep It Simple, Stupid)

---

## 7. Separation of Concern

Setiap layer memiliki tanggung jawab jelas.

Frontend:

- UI logic terpisah dari business logic
- Component terpisah dari data fetching

Backend:

- Controller tidak berisi business logic kompleks
- Service layer jelas
- Repository jelas

Code yang bercampur tanggung jawab akan sulit dipelihara.

---

## 8. Testing Mindset

Engineer tidak hanya membuat fitur, tetapi memastikan fitur stabil.

Minimal:

- Test manual sebelum PR
- Edge case dipikirkan
- Error state ditangani
- Loading state ada

Jika memungkinkan:

- Unit test
- API test

---

## 9. Ownership & Responsibility

Setiap engineer bertanggung jawab atas:

- Kualitas code yang dibuat
- Bug yang muncul
- Perbaikan setelah review

Tidak ada mindset:

> “Yang penting jalan.”

Yang ada adalah:

> “Apakah ini layak masuk production?”

---

## 10. Continuous Improvement

Kita selalu:

- Refactor code lama
- Evaluasi workflow
- Meningkatkan standar
- Mengurangi technical debt

Engineer bukan hanya implementer, tetapi problem solver.

---

## 11. Communication Over Assumption

Jika ada keraguan:

- Tanya
- Diskusi
- Konfirmasi

Jangan asumsi.

Engineering yang baik bukan hanya soal teknis, tetapi kolaborasi.

---

## 12. Documentation Over Memory

Jika sesuatu penting dan berulang:

- Dokumentasikan
- Masukkan ke handbook
- Update guideline

Knowledge yang hanya ada di kepala senior adalah risiko organisasi.

---

## Definition of Professional Engineer (Internal Standard)

Engineer profesional adalah engineer yang:

- Bisa menjelaskan keputusan teknisnya
- Memikirkan dampak jangka panjang
- Tidak defensif saat direview
- Mengutamakan kualitas
- Konsisten mengikuti standar

---

## Closing Statement

Engineering Principles ini bukan teori.
Ini adalah standar perilaku dan kualitas yang harus terlihat dalam:

- Code
- Pull Request
- Review
- Diskusi
- Deployment

Jika prinsip ini tidak terlihat dalam praktik sehari-hari, maka prinsip ini belum dijalankan.
