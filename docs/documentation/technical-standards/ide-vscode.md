---
title: "Penggunaan VS Code"
slug: "penggunaan-vscode"
description: "Panduan konfigurasi dan ekstensi VS Code untuk standar TLab Tech"
editLink: true
---

# Penggunaan Visual Studio Code (VS Code)

Visual Studio Code adalah editor kode sumber yang ringan namun kuat yang berjalan di desktop Anda. Untuk memastikan konsistensi kode dan produktivitas tim, berikut adalah panduan konfigurasi standar di TLab Tech.

## 1. Ekstensi Wajib

Untuk mendukung standar _engineering_ kita (seperti Code Review & Static Analysis), pastikan Anda menginstal ekstensi berikut:

### Quality & Formatting

- **[SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)**: Wajib. Memberikan umpan balik instan tentang _Code Smells_, _Bugs_, dan _Vulnerabilities_ saat Anda mengetik, selaras dengan server SonarQube kita.
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: Untuk _linting_ JavaScript/TypeScript.
- **[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: Untuk format kode otomatis yang konsisten.

### Framework Spesifik

- **[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)**: (Sebelumnya Volar) Untuk pengembangan Vue 3.
- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**: Jika proyek menggunakan Tailwind.

### Productivity

- **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)**: Membantu memvisualisasikan _code authorship_ dan navigasi riwayat Git.
- **[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**: Memastikan gaya pengkodean yang konsisten antar editor yang berbeda.

## 2. Pengaturan Pengguna (User Settings)

Disarankan untuk menggunakan pengaturan berikut pada `.vscode/settings.json` (level proyek) atau pengaturan pengguna global Anda untuk mengotomatisasi pemformatan:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true
}
```

## 3. Integrasi Terminal

Pastikan terminal VS Code Anda terintegrasi dengan Git Bash (Windows) atau Zsh (Mac/Linux) untuk menjalankan perintah CLI standar kita.

---

::: tip
Selalu cek file `.vscode/extensions.json` di dalam repositori proyek (jika ada) untuk melihat rekomendasi ekstensi spesifik proyek tersebut.
:::
