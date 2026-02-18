---
title: "Common Errors (FAQ)"
slug: "troubleshooting-faq"
description: "Kumpulan solusi untuk error yang sering ditemui"
editLink: true
---

# Common Errors & Troubleshooting (FAQ) 🛠️

Halaman ini berisi kumpulan masalah umum yang sering dihadapi oleh engineer TLab Tech beserta solusinya.

[[toc]]

---

## 🔐 Git & Version Control

### 1. Error: `Updates were rejected because the tip of your current branch is behind`

**Penyebab:** Ada perubahan di remote branch yang belum ada di lokal kamu.
**Solusi:**

```bash
# Ambil perubahan terbaru dan rebase (rekomendasi TLab)
git pull --rebase origin <nama_branch>
```

### 2. Error: `Permission denied (publickey)`

**Penyebab:** SSH Key belum terdaftar di GitLab/GitHub atau agent SSH mati.
**Solusi:**

1. Cek apakah key sudah ada: `ls -al ~/.ssh`
2. Jika belum, generate baru: `ssh-keygen -t ed25519 -C "email@tlab.co.id"`
3. Copy isi `.pub` ke GitLab/GitHub Settings > SSH Keys.

### 3. Git Conflict saat Rebase

**Solusi:**

1. Buka file yang konflik (biasanya ditandai `<<<<<<< HEAD`).
2. Pilih kode yang benar (Current Change vs Incoming Change).
3. Simpan file.
4. Lanjut rebase: `git rebase --continue` (JANGAN commit manual).

---

## 📦 Node.js & NPM

### 1. Error: `EACCES: permission denied, access '/usr/lib/node_modules'`

**Penyebab:** Mencoba install package global tanpa izin root.
**Solusi:**

- **Jangan** gunakan `sudo` untuk npm install jika memungkinkan.
- Gunakan **NVM (Node Version Manager)** untuk mengelola versi node per user.

### 2. Error: `npm ERR! code EINTEGRITY`

**Penyebab:** `package-lock.json` tidak sinkron atau cache korup.
**Solusi:**

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### 3. `node-gyp` Rebuild Error (Python/C++ missing)

**Penyebab:** Beberapa library butuh compile native module.
**Solusi:**

- **Mac:** `xcode-select --install`
- **Linux:** `sudo apt install build-essential python3`
- **Windows:** Install via `npm install --global --production windows-build-tools`

---

## 🐳 Docker & Environment

### 1. Error: `Bind for 0.0.0.0:80 failed: port is already allocated`

**Penyebab:** Port yang mau dipakai container sudah dipakai aplikasi lain (bisa jadi Apache/Nginx lokal atau container lain).
**Solusi:**

- Cari siapa yang pakai port: `lsof -i :80` (Mac/Linux)
- Matikan service tersebut atau ganti mapping port di `docker-compose.yml`.

### 2. Error: `docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock.`

**Penyebab:** Docker Desktop belum jalan atau user tidak punya akses.
**Solusi:**

- Pastikan aplikasi Docker Desktop sudah dibuka.
- Jika di Linux: `sudo usermod -aG docker $USER` lalu logout dan login lagi.

---

## 🌐 Network & Access

### 1. Tidak bisa akses SonarQube / Dependency-Track

**Error:** `DNS_PROBE_FINISHED_NXDOMAIN` atau `Connection Timed Out`.
**Penyebab:** Tools internal TLab hanya bisa diakses via VPN atau jaringan kantor.
**Solusi:**

- Pastikan **VPN TLab** sudah terkoneksi.
- Coba ping: `ping sonarqube.tlab.co.id`

---

::: tip Belum nemu solusinya?
Tanyakan di channel Slack `#engineering-support` atau `#dev-lounge`. Jangan lupa sertakan screenshot error dan langkah yang sudah dicoba.
:::
