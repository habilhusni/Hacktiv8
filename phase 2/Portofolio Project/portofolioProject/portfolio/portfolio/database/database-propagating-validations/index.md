---
layout: portfolio
title: Database Propagating Validations with ORM or ODM
---

## Learning Competencies

* Mampu menggunakan validasi yang ada di Sequelize ataupun Mongoose
* Mampu menampilkan pesan kesalahan yang sesuai ke pengguna

## Summary

Untuk melindungi integritas datamu, kamu perlu memvalidasi form ketika user mengirim sebuah data yang tidak sesuai dengan batasan yang telah kamu tentukan. Dalam hal ini kamu perlu metode transaction process ketika akan menyimpan sebuah data. Kemudian mengembalikan pesan kesalahan yang sesuai sehingga user dapat meperbaikinya. Mulailah dengan membuat skeleton untuk Express.

## Releases

### Release 0: Validations on model

Buatlah sebuah form tentang event organizers, yang memungkinkan setiap user untuk menambahkan event baru ke dalam database. Gunakan ORM Sequelize atau ODM Mongoose untuk membuat model dan validasi dari sebuah table atau collection. Kemudian tampilkan pesan kesalahan yang sesuai ketika user salah memasukkan data.

Jika menggunakan Sequelize, buatlah proses rollback ketika:

1. Tanggal pembuatan kosong
2. Judul kosong atau duplikat
3. Nama event kosong
4. Event organizers email salah

Jika menggunakan Mongoose, kesalahan tersebut dapat diberitahukan dengan melempar error.

Kamu akan tahu kamu berhasil apabila:

1. Events yang salah tidak akan tersimpan ketika data dikirim
2. User mengerti setiap pesan kesalahan yang ditampilkan
3. Form edit otomatis tersisi data yang sesuai dengan data yang dikirimkan
4. tambahan nilai jika pesan kesalahan yang muncul ada di sisi input yang bersangkutan

### Release 1: Validation on UI (Optional)

Form User Interface mambantu user untuk memvalidasi data yang diisikan.

1. Modifikasi tampilan sehingga user dapat memasukkan tanggal yang benar, seperti menggunakan input datepicker
2. Modifikasi model dan controller sehingga lebih fleksibel dengan format tanggal.

## Resources

* [Node.js](https://nodejs.org/en)
* [PostgreSQL](http://postgresql.org)
* [Sequelize](http://docs.sequelizejs.com)
* [MongoDB](http://mongodb.org)
* [Mongoose](http://mongoosejs.com)
