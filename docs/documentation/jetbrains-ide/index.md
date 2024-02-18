---
title: 'Penggunaan JetBrains IDE'
slug: 'penggunaan-jetbrains-ide'
description: 'Cara penggunaan JetBrains IDE'
editLink: true
---

# Penggunaan JetBrains IDE

JetBrains IDE merupakan tools yang powerfull dalam menulis source code untuk software development.
Didalamnya terdapat berbagai macam fitur untuk membantu kita selama proses pembuatan aplikasi diantaranya:
1. Code Static Analyses
2. Debugging
3. Audit Dependency
4. dll

Untuk dapat menggunakan produk JetBrains IDE ada beberapa tahapan yang perlu dilakukan yaitu membuat user baru di laptop masing-masing dengan nama *developer*. Kenapa harus membuat username baru ? kenapa tidak bisa menggunakan users yang telah ada di laptop saat ini ?
Karena license JetBarins yang di sediakan oleh TLab adalah license yang bersifat Team / Organization, yang artinya tools JetBarins bisa
digunakan di beberapa perangkat asalkan username os machinenya sama. Jika username os nya berbeda maka akan terjadi collision license.

Untuk membuat username baru ikuti step by step berikut ini:

## Linux

### 1. Menambah User di Linux:

Pertama kita perlu login sebagai *root*, lalu ketikan perintah berikut:

```bash
# adduser developer
```

Lalu akan muncul *prompt* untuk mengisi:
* Password baru
* Additional information, ini optional dan bisa di skip

Jika berhasil maka akan ada folder baru di directory `/home` dengan nama `developer`. Kita perlu mengcopy pekerjaan yang ada di folder username lama ke username baru.

### 2. Menambahkan Akses Sudo ke User Baru

User baru yang telah kita buat, defaultnya tidak memiliki akses perintah *sudo*. Kita perlu menambhakan aksesnya dengan cara memasukan user *developer* menjadi *Sudo Group*. Perintahnya seperti berikut:

opsi perintah dengan `usermod`

```bash
# usermod -aG sudo developer
```

opsi perintah dengan `visudo`

Ketikkan perintah `visudo`

```bash
# visudo
```

`visudo` pada dasarnya akan membuka file `/etc/sudores` menggunakan `vi` editor. Jika menggunakan ubuntu `visudo` menggunakan `nano` sebagai editornya.
Jika sudah terbuka cari line yang bertuliskan seperti berikut:

```file
#/etc/sudoers

root ALL=(ALL:ALL) ALL
```

Dibawah line tersebut tambahkan command berikut:

```file
# /etc/sudoers

root ALL=(ALL:ALL) ALL
developer ALL=(ALL:ALL) ALL
```

Jika sudah selesai simpan dan close editor dengan menekan shortcut `Ctrl + X`, diikuti dengan `Y` dan `Enter` untuk mengkonfirmasi.

### 3. Testing User developer Sudo Privileges

Jika semua tahapan sudah dilakukan, maka kita bisa test apakah user developer baru kita dapat menjalankna perintah *sudo*. Kita perlu login terlebih dahulu mengunakan user `developer` lalu ketikkan perntah berikut:

```bash
$ sudo docker ps
```

Jika berhasil perintah diatas akan menampilkan docker container yang sedang berjalan di laptop kita. Jika belum berhasil, jangan malu-malu untuk bertanya ke chapter lead / sobat amazing lainnya.

### 4. Install Aplikasi JetBrains

JetBrains menyediakan bermacam variant produk *IDE*, tetapi yang paling sering digunakan adalah:

1. PhpStorm -> IDE untuk mengembangkan aplikasi laravel
2. WebStorm -> IDE untuk mengembangkan aplikasi Nodejs, React, atau Vue
3. PyCharm -> IDE untuk mengembangkan aplikasi python
4. DataGrip -> Cross Platform database tools

Cara instalasi JetBrains IDE di linux dapat dilakukan dengan berbagai macam cara, bisa install melalui [Snap](https://snapcraft.io/store), [Flatpak](https://flathub.org/), atau download langsung dari website [JetBrains](https://www.jetbrains.com/ides/).

## Windows
TBC
