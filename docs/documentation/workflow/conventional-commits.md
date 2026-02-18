# Conventional Commits

## Intro

**Conventional Commits** adalah standar penulisan _commit message_ agar lebih mudah dibaca, dipahami, dan digunakan untuk otomatisasi (seperti pembuatan _changelog_). Dengan mengikuti aturan ini, kita membantu teman satu tim (dan diri kita sendiri di masa depan) untuk memahami _history_ perubahan kode dengan cepat.

## Struktur Commit Message

Format dasarnya sangat sederhana:

```
<tipe>(<scope>): <deskripsi singkat>

[opsional body: penjelasan lebih detail]

[opsional footer: referensi issue atau breaking changes]
```

## Daftar Tipe Commit (Cheatsheet)

Gunakan tipe berikut di awal pesan commit kamu:

| Tipe           | Kapan Digunakan?                                                                                      | Contoh                                 |
| :------------- | :---------------------------------------------------------------------------------------------------- | :------------------------------------- |
| **`feat`**     | Menambahkan fitur baru.                                                                               | `feat: add login page`                 |
| **`fix`**      | Memperbaiki _bug_ atau _error_.                                                                       | `fix: resolve crash on startup`        |
| **`docs`**     | Perubahan hanya pada dokumentasi.                                                                     | `docs: update readme API section`      |
| **`style`**    | Perubahan format (spasi, _formatting_, titik koma) tanpa mengubah logika kode.                        | `style: fix indentation in header`     |
| **`refactor`** | Perubahan kode yang bukan perbaikan bug maupun penambahan fitur (misal: _cleanup_).                   | `refactor: simplify auth logic`        |
| **`perf`**     | Perubahan kode untuk meningkatkan performa.                                                           | `perf: optimize image loading`         |
| **`test`**     | Menambahkan atau memperbaiki tes, tanpa mengubah kode produksi.                                       | `test: add unit test for user service` |
| **`chore`**    | Perubahan kecil pada _build process_, _auxiliary tools_, atau _library_ (misal: _update dependency_). | `chore: update react to v18`           |
| **`build`**    | Perubahan yang mempengaruhi sistem _build_ atau dependensi eksternal.                                 | `build: add webpack bundle analyzer`   |
| **`ci`**       | Perubahan pada file konfigurasi CI/CD.                                                                | `ci: fix github actions pipeline`      |

## Aturan Penulisan

1.  **Gunakan Bahasa Inggris Imperatif**: Gunakan kata kerja bentuk perintah (_imperative mood_).
    - ✅ Benar: "add...", "fix...", "change..."
    - ❌ Salah: "added...", "fixed...", "changing..."

    ::: tip 💡 Tips
    Baca commit message kamu dengan awalan _"If applied, this commit will..."_ (Jika diterapkan, commit ini akan...). Kalimatnya harus nyambung.
    :::

2.  **Huruf Kecil Semua**: Gunakan huruf kecil untuk `<tipe>` dan awal `<deskripsi>`.
    - `feat: add new button` (bukan `Feat: Add new button`)
3.  **Tanpa Titik di Akhir**: Jangan gunakan tanda titik (.) di akhir baris deskripsi singkat.
4.  **Scope Opsional**: Gunakan scope dalam kurung jika ingin memperjelas bagian mana yang diubah.
    - `feat(auth): add login endpoint`
    - `fix(ui): adjust button padding`

## Contoh Nyata

### Commit Sederhana

```bash
feat: add dark mode switch
```

```bash
fix: prevent infinite loop in sidebar
```

### Commit dengan Scope

```bash
feat(profile): add avatar upload feature
```

### Commit dengan Penjelasan Detail (Body)

Jika perlu menjelaskan _kenapa_ perubahan ini dilakukan, gunakan _body_.

```bash
fix: handle null token in API request

The API request was failing when the token was null because headers were not set correctly.
This commit adds a check to ensure the token exists before making the request.
```

### Breaking Changes

Jika ada perubahan yang bikin kode lama _error_ (misal: ganti nama fungsi public, hapus endpoint API), tambahkan tanda seru `!` setelah tipe/scope ATAU tulis `BREAKING CHANGE:` di footer.

**Opsi 1 (Pake tanda seru):**

```bash
feat!: drop support for node 12
```

**Opsi 2 (Footer):**

```bash
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now reserved
```

## Referensi

- [Conventional Commits (Official)](https://www.conventionalcommits.org/en/v1.0.0/)
- [Angular Commit Message Convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)
