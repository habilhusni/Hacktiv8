---
layout: portfolio
title: Web API Authentication and Authorization
---

## Learning Competencies

* Mampu mengimplementasikan registrasi, login, dan otentikasi

## Summary

Gunakan Express, buatlah registrasi, login, dan otentikasi ketika login sebelum menampilkan informasi. Gunakan metode MVC untuk menyelesaikan portfolio ini.

## Releases

### Release 0: Implement Login dan Registrasi

Aplikasimu harus memiliki fungsi sebagai berikut:

1. Pengguna dapat registrasi akun barunya menggunakan email dan password.
2. Pengguna yang terdaftar dapat melakukan login.
3. Jika Pengguna tidak login, mereka hanya dapat melihat pesan selamat datang di halaman beranda.
4. Jika Pengguna sedang login, mereka dapat melihat semua pengguna di halaman beranda.
5. Penguna dapat melakukan logout.
6. Buatlah sebuah fungsi helper untuk mengakses properti dari user yang sedang login tersebut.

### Release 1: Enkripsi

Menyimpan password adalah hal yang sangat penting, dan anda harus memastikan bahwa informasi password ini tersimpan dengan aman. Password dari pengguna harus dienkripsi dan disimpan sebagai hash password di database. kamu bebas menentukan cara atau algoritma apa yang akan digunakan untuk mengenkripsi password-nya.

### Release 2: Validation (Optional)

Demontrasikan model validasi dan pesan kesalahan serta level akses dari pengguna.

* Tambahkan validasi pada model pengguna, termasuk memvalidasi panjang password dan validasi format email
* Tampilkan pesan kesalahan kepada pengguna apabila pengguna memasukkan data yang salah sperti memasukkan email atau password yang salah. Tambahkan kolom level akses di database, contohnya seperti admin atau siswa. Batasi akses yang login sebagai siswa, contohnya seperti tidak dapat menghapus dan mengedit pengguna dari daftar pengguna yang ditampilkan.
