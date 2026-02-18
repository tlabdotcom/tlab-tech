# Testing Strategy 🧪

Di TLab Tech, _Automated Testing_ bukanlah tugas tambahan yang dikerjakan "kalau ada waktu", melainkan bagian tak terpisahkan dari proses _development_. Kode yang tidak diuji adalah _legacy code_ sejak hari pertama ia ditulis.

Tujuan utama kita menulis tes adalah untuk **mendapatkan rasa aman (confidence)** saat melakukan _refactoring_ atau menambah fitur baru, tanpa takut merusak fitur yang sudah berjalan.

---

## 1. Piramida Testing (The Testing Pyramid)

Kita menganut konsep _Testing Pyramid_ untuk mendistribusikan porsi pengujian:

1. **Unit Tests (Dasar Piramida - Terbanyak & Tercepat):** Menguji satu fungsi, fungsi utilitas, atau satu komponen UI secara terisolasi. _Mocking_ digunakan secara ekstensif di sini.
2. **Integration Tests (Tengah):** Menguji bagaimana beberapa unit bekerja sama. Misalnya: koneksi dari _Service_ ke _Repository/Database_, atau komponen UI yang berinteraksi dengan _State Management_.
3. **End-to-End / E2E Tests (Puncak - Paling Sedikit & Paling Lambat):** Menguji alur aplikasi secara keseluruhan layaknya _user_ sungguhan (klik tombol, isi form, navigasi halaman).

::: info 💡 Pembagian Tanggung Jawab

- **Frontend & Backend Engineers:** Bertanggung jawab penuh atas **Unit Test** dan **Integration Test** pada kode yang mereka tulis.
- **QA Engineers (SDET):** Bertanggung jawab utama pada **E2E Test**, namun FE/BE dianjurkan membantu untuk skenario _happy path_ (alur utama).
  :::

---

## 2. Standard Stack & Tools 🛠️

Untuk menjaga konsistensi antar _project_, berikut adalah standar _tools_ yang kita gunakan:

| Area                        | Tools Standar                   | Keterangan                                                                      |
| :-------------------------- | :------------------------------ | :------------------------------------------------------------------------------ |
| **Frontend Unit/Component** | Vitest / Jest + Testing Library | Fokus pada interaksi _user_ (_behavior_), bukan implementasi internal komponen. |
| **Backend Unit/API**        | Jest / Vitest + Supertest       | Menggunakan _In-Memory DB_ atau _Mocking_ untuk mempercepat eksekusi.           |
| **End-to-End (E2E)**        | Cypress / Playwright            | Dijalankan pada _environment_ Staging atau Local yang sudah ter-seeding data.   |

---

## 3. Best Practices Penulisan Tes

Agar tes mudah dibaca oleh _Engineer_ lain (dan diri kamu sendiri di masa depan), patuhi aturan berikut:

### A. Pola AAA (Arrange, Act, Assert)

Pisahkan blok kode tes menjadi tiga bagian yang jelas:

- **Arrange:** Siapkan data palsu (_mock data_), konfigurasi, atau _state_ awal.
- **Act:** Jalankan fungsi atau _render_ komponen yang ingin diuji.
- **Assert:** Verifikasi hasilnya (apakah sesuai ekspektasi?).

```javascript
// ✅ Contoh penulisan Unit Test yang baik (Pola AAA)
describe("calculateDiscount()", () => {
  it("should apply 10% discount for VIP members", () => {
    // 1. Arrange
    const user = { role: "VIP" };
    const cartTotal = 100000;

    // 2. Act
    const finalPrice = calculateDiscount(user, cartTotal);

    // 3. Assert
    expect(finalPrice).toBe(90000);
  });
});
```

### B. Uji "Behavior", Bukan "Implementation Details"

Jangan menguji nama variabel internal atau memanggil _method_ _private_ secara langsung. Ujilah **apa yang dihasilkan (output)** ketika diberikan **input tertentu**.

- **Frontend:** Jangan tes apakah `state.isOpen` bernilai `true`. Teslah apakah teks "Modal Terbuka" muncul di layar setelah tombol diklik.
- **Backend:** Jangan tes apakah `query` SQL-nya persis string "SELECT \*". Teslah apakah fungsi mengembalikan struktur objek JSON yang benar.

### C. Deskripsi yang Jelas (It Should...)

Gunakan bahasa Inggris yang deskriptif untuk penamaan blok `it()` atau `test()`. Jika tes tersebut gagal, log _error_-nya harus langsung memberi tahu apa yang salah.

- ❌ `it('works', ...)` -> _Buruk, tidak informatif._
- ✅ `it('should return 404 if user ID is not found in database', ...)` -> _Sangat jelas._

---

## 4. Code Coverage & Quality Gate 📈

Seperti yang telah dibahas pada halaman [Code Review & SonarQube](https://www.google.com/search?q=/documentation/standards/code-review), kita memiliki aturan wajib di _CI/CD pipeline_:

::: warning 🎯 Target Wajib: >= 70%
Setiap **KODE BARU (New Lines of Code)** pada sebuah _Pull Request_ wajib memiliki _Code Coverage_ minimal **70%**.
Jika kurang dari itu, SonarQube akan menggagalkan _Quality Gate_ dan PR kamu **tidak bisa di-merge**.
:::

**Apa saja yang TIDAK PERLU di-test (Excluded from Coverage)?**
Kamu bisa mengecualikan (_exclude_) _file_ berikut pada konfigurasi `vitest.config.ts` / `jest.config.js`:

- _File_ konfigurasi (`*.config.js`, `tailwind.config.js`).
- _File_ tipe deklarasi (`*.d.ts`, _interfaces_, _types_).
- _Constants_ atau _Enums_ yang tidak mengandung logika fungsi.
- Migrasi _database_ murni.

---

## 5. Menjalankan Tes Lokal

Sebelum men-submit PR, biasakan menjalankan perintah ini di terminal lokalmu:

```bash
# Menjalankan seluruh tes
npm run test

# Menjalankan tes dengan mode Watch (berguna saat development)
npm run test:watch

# Mengecek hasil Code Coverage di lokal (PENTING sebelum push!)
npm run test:coverage

```

Pastikan tabel _coverage_ di terminalmu menunjukkan angka hijau (>70%) pada kolom _Statements_, _Branches_, _Functions_, dan _Lines_ untuk _file_ yang baru kamu kerjakan.
