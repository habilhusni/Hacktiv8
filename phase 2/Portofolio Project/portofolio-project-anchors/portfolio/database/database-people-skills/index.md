---
layout: portfolio
title: Database People Skills with ORM or ODM
---

## Learning Competencies

### Sequelize

* Mampu menggunakan migrasi Sequelize
* Mampu menggunakan query-query di Sequelize
* Mampu menggunakan asosiasi di Sequelize

### Mongoose

* Mampu menggunakan model dengan Mongoose
* Mampu menggunakan seeder sesuai model
* Mampu menggunakan teknik embedded data maupun reference

## Summary

Gunakan Node.js, database MySQL,PostgreSQL/SQLite atau MongoDB, serta Sequelize atau Mongoose untuk menyelesaikan portfolio ini. Kamu bebas memilih salah satu kombinasi ORM/ODM dengan database apapun sesuai kebutuhan.

## Specification

Berikut spesifikasi minimal yang harus dimiliki oleh aplikasi. Field pada modelnya bebas.

1. User mempunyai banyak skill.
2. Skill dapat ditambahkan ke banyak user.
3. User dapat memberikan nilai untuk setiap skill yang dia miliki.
4. Skill harus unik, tidak boleh ada duplikat.

## Releases

### Release 0.A : One for Sequelize

(Jika kamu memilih cara SQL)

Buatlah migrasi untuk membuat tabel tabel yang diperlukan, dan gunakan seeder untuk mengisi data master. Aplikasi yang dibuat harus mengikuti hal-hal yang sudah ditentukan dalam spesifikasi. Kamu juga harus membuat fungsi di dalam model untuk mengontrol input yang masuk.

### Release 0.B : One for Mongoose

(Jika kamu memilih cara NoSQL)

Buatlah model yang mendefinisikan collection yang diperlukan, gunakan seeder dengan JSON untuk mengisi data awal. Aplikasi yang dibuat harus mengikuti hal-hal yang sudah ditentukan dalam spesifikasi. Gunakan tipe data serta fungsi yang sesuai untuk mengontrol input yang masuk.

### Release 1 : All for One

Kamu akan tahu bahwa kamu berhasil jika:

1. Kamu dapat membuat User dan memberikan beberapa skill kepada user tersebut.
2. User dapat memberikan nilai untuk setiap skill yang dia miliki.
3. Skill yang namanya sama tidak dapat disimpan.

## Resources

* [Node.js](https://nodejs.org/en)
* [PostgreSQL](http://postgresql.org)
* [Sequelize](http://docs.sequelizejs.com)
* [MongoDB](http://mongodb.org)
* [Mongoose](http://mongoosejs.com)
