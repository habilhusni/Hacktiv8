---
layout: portfolio
title: Testing Controller with Mocha
---

## Learning Competencies

* Mampu menulis mocha test terhadap aplikasi yang sudah ada
* Terbiasa menggunakan mocha dan chai
* Mampu melakukan test terhadap controller yang kompleks yang bergantung kepada parameter dan session
* Mampu mengelola *test dependencies* dan *isolation*

## Summary

Pada tantangan ini kamu akan menulis code terhadap code yang akan kamu buat. Tugas kamu adalah membuat test suite yang valid. Kamu dapat menggunakan metode TDD atau BDD dalam menyelesaikannya.

## Releases

## Release 0: Prepare the Suite

Buatlah beberapa spec unit, sesuai dengan aplikasi yang akan kamu buat. Kamu mungkin membutuhkan [Chai.js](http://chaijs.com) dalam membuat test yang ada. Pastikan test yang kamu buat valid (artinya *assertion* cocok dengan deskripsi test-nya) dan dapat dijalankan secara independen atau sendiri-sendiri tanpa tergantung oleh code lain.

## Release 1: Pass the Suite

Selesaikan semua test yang ada sesuai dengan spec yang sudah kamu buat. Ada kemungkinan test yang kamu buat akan tergantung kepada isi session, yang dapat menyebabkan test tidak valid. Tapi ngga masalah! Kamu dapat membuat session palsu, atau kamu bisa gunakan [Sinon.js](http://sinonjs.org), khususnya fitur [stub](http://sinonjs.org/docs/#stubs) dan [mocks](http://sinonjs.org/docs/#mocks).
