---
title: "Penggunaan JetBrains IDE"
slug: "penggunaan-jetbrains-ide"
description: "Cara penggunaan JetBrains IDE"
editLink: true
---

# Penggunaan JetBrains IDE

JetBrains IDE merupakan tools yang powerfull dalam menulis source code untuk software development.
Didalamnya terdapat berbagai macam fitur untuk membantu kita selama proses pembuatan aplikasi diantaranya:

1. Code Static Analyses
2. Debugging
3. Audit Dependency
4. dll

Untuk dapat menggunakan produk JetBrains IDE ada beberapa tahapan yang perlu dilakukan yaitu membuat user baru di laptop masing-masing dengan nama _developer_. Kenapa harus membuat username baru ? kenapa tidak bisa menggunakan users yang telah ada di laptop saat ini ?
Karena license JetBarins yang di sediakan oleh TLab adalah license yang bersifat Team / Organization, yang artinya tools JetBarins bisa
digunakan di beberapa perangkat asalkan username os machinenya sama. Jika username os nya berbeda maka akan terjadi collision license.

Untuk membuat username baru ikuti step by step berikut ini:

## Linux

### 1. Menambah User di Linux:

Pertama kita perlu login sebagai _root_, lalu ketikan perintah berikut:

```bash
# adduser developer
```

Lalu akan muncul _prompt_ untuk mengisi:

- Password baru
- Additional information, ini optional dan bisa di skip

Jika berhasil maka akan ada folder baru di directory `/home` dengan nama `developer`. Kita perlu mengcopy pekerjaan yang ada di folder username lama ke username baru.

### 2. Menambahkan Akses Sudo ke User Baru

User baru yang telah kita buat, defaultnya tidak memiliki akses perintah _sudo_. Kita perlu menambhakan aksesnya dengan cara memasukan user _developer_ menjadi _Sudo Group_. Perintahnya seperti berikut:

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

```txt
#/etc/sudoers

root ALL=(ALL:ALL) ALL
```

Dibawah line tersebut tambahkan command berikut:

```txt
# /etc/sudoers

root ALL=(ALL:ALL) ALL
developer ALL=(ALL:ALL) ALL
```

Jika sudah selesai simpan dan close editor dengan menekan shortcut `Ctrl + X`, diikuti dengan `Y` dan `Enter` untuk mengkonfirmasi.

### 3. Testing User developer Sudo Privileges

Jika semua tahapan sudah dilakukan, maka kita bisa test apakah user developer baru kita dapat menjalankna perintah _sudo_. Kita perlu login terlebih dahulu mengunakan user `developer` lalu ketikkan perntah berikut:

```bash
$ sudo docker ps
```

Jika berhasil perintah diatas akan menampilkan docker container yang sedang berjalan di laptop kita. Jika belum berhasil, jangan malu-malu untuk bertanya ke chapter lead / sobat amazing lainnya.

### 4. Copy Project ke User Baru

Setelah semua step by step dilakukan, kita perlu mengcopy project yang ada di user lama ke dalam folder home user baru kita.
Kita perlu login menggunakan user baru yang telah kita buat sebelumnya yaitu `developer` lalu ketikkan perintah berikut:

```bash
$ sudo cp -r /home/old_username/NodeProjects /home/developer/NodeProjects
```

Jika berhasil maka folder `NodeProjects` beserta dengan isinya akan muncul di directory `/home/developer`, tetapi kita perlu merubah
ownership dari folder / file yang kita copy dari user lain supaya kita bisa melakukan modifikasi di folder / file tersebut.
untuk mengubah ownership ketikkan perintah berikut:

```bash
$ chown -R developer:developer NodeProjects
```

Ulangi step-step diatas jika ingin mengopy folder / file lainnya.

### 5. Install Aplikasi JetBrains

JetBrains menyediakan bermacam variant produk _IDE_, tetapi yang paling sering digunakan adalah:

1. PhpStorm -> IDE untuk mengembangkan aplikasi laravel
2. WebStorm -> IDE untuk mengembangkan aplikasi Nodejs, React, atau Vue
3. PyCharm -> IDE untuk mengembangkan aplikasi python
4. DataGrip -> Cross Platform database tools

Cara instalasi JetBrains IDE di linux dapat dilakukan dengan berbagai macam cara, bisa install melalui [Snap](https://snapcraft.io/store), [Flatpak](https://flathub.org/), atau download langsung dari website [JetBrains](https://www.jetbrains.com/ides/).

## Windows

TBC

## Refrensi

- [Ubuntu User Management](https://ubuntu.com/server/docs/security-users)
- [Debian User Management](https://vitux.com/how-to-manage-user-accounts-in-debian-10/)
- [Fedora User Management](https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide/basic-system-configuration/Managing_Users_and_Groups/)
- [ArchLinux User Management](https://linuxhint.com/add_users_arch_linux/)
