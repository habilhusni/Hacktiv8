---
layout: portfolio
title: Web API Client Server Scoping
---

## Learning Competencies

* Mampu memetakan alur data melalui sebuah aplikasi web.
* Mampu menggunakan URL parameter untuk mengirimkan data ke dalam sebuah aplikasi server.
* Mampu menggunakan javascript dan DOM untuk mengelola tampilan di client.
* Mampu menggunakan Cookies untuk mengelola tampilan di client.

## Summary

Setiap permintaan HTTP, harus melalui beberapa langkah sebagai berikut:

1. Membuka koneksi ke sebuah web server.
2. Meminta dokumen data.
3. Mengunggu server untuk mengirim dokumen HTML/JSON/XML/dsb.
4. Setelah menerima dokumen, menutup koneksi.
5. Menginterpretasi dokumen.
6. Muat dan pasangkan **internal Resources** (CSS, JS, etc) tertentu ke dalam dokumen.

Karena JavaScript tidak berjalan sampai seluruh dokumen telah dikirim kembali ke browser, mungkin diperlukan untuk mencari data dalam dokumen itu sendiri.

Ada beberapa tempat data dapat disimpan yakni:

1. Di dalam sebuah tag atau atribut yang ada di dokumen.
2. Di dalam URL yang digunakan untuk meminta dokumen tersebut.
3. Di dalam sebuah `script` tag, seringkali di set sebagai global variable.
4. Di dalam sebuah cookie.

Tantangan kali ini akan memperlihatkan kemampuanmu untuk menyimpan dan memuat data dari elemen-elemen DOM, URLs, dan `script` tag. kamu juga dapat memperlihatkan kemampuanmu dalam mengelola cookies. Buatlah sebuah skeleton code dengan Express. Ubahlah routes, tampilan, and JavaScript untuk menerima data dari server ke client ketika halaman pertama kali dimuat.

## Releases

### Release 0 : Maintain State

Tuliskan kode javascript yang dapat membaca data dari URL, atribut di element dan dari global objek javascript dari sebuah dokumen yang dikirim oleh server tanpa membutuhkan sebuah ***AJAX request***.

1. Ubahlah halaman index sehingga sebuah tombol dapat mengubah sebuah judul dengan data yang ada pada atribut tombol itu sendiri dengan nama atribut ***data-heading***.
2. Ubahlah halaman skills sehingga sebuah tombol dapat mengubah sebuah judul dengan data yang diperoleh dari URL.
3. Ubahlah halaman meals sehingga sebuah tombol dapat mengubah sebuah judul dengan data acak yang diperoleh dari global objek javascript bernama meals.

### Release 1 : Cookies, Session, and Storage (optional)

Cookies adalah serangkaian teks yang disimpan pada komputer anda oleh situs web yang Anda kunjungi. Sehingga memungkinkan pengguna dapat menyimpan warna favoritnya, dan dapat memuat warna favoritnya dan memasangkannya sebagai ***background*** melalui sebuah tombol dihalaman web manapun juga dalam situs tersebut.

1. Buatlah sebuah form yang memungkinkan pengguna menentukan warna favoritnya. Simpanlah datanya di dalam sebuah cookie.
2. Buatlah sebuah tombol di semua halaman web, yang dapat merubah background dari halaman sesuai dengan warna favorit pengguna dengan cara membaca cookie tadi

Hint: Ketika kamu menyimpan data pada cookie di server, kamu perlu untuk menentukan domain mana saja yang dapat mengakses cookie tersebut. Serta browser Chrome mencegah JavaScript membacanya. Pastikan kamu menyetel domain dengan string kosong (`""`)!
