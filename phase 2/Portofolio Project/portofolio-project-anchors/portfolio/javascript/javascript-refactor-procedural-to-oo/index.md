---
layout: portfolio
title: JavaScript Refactor Procedural to Object-Oriented
---

## Learning Competencies

* Mampu mengimplementasikan kode-kode javascript yang fleksibel antara setiap objeknya.
* Mampu menguraikan masalah ke dalam dimensi yang berbeda seperti: ***separation of concerns, Law of Demeter, frequency of use, frequency of change, encapsulation, loose coupling, dan single-responsibility principle***
* Mampu menuliskan kode ***Object-Oriencted JavaScript***

## Summary

Sebagai programmer professional, kamu akan menemui berbagai kode JavaScript yang ditulis secara prosedural. Dalam portofolio kali ini kamu ditantang untuk merapikan kode tersebut. Ubahlah kode tersebut ke arah **Object Oriented programming**.

Mulailah dengan menggunakan contoh kode yang ada [di sini](source/app/index.html) dan mulailah memodifikasinya. Portfolio ini sebenarnya mudah, hanya perlu menggunakan JavaScript biasa tanpa Node.js, tanpa perlu Babel ataupun module bundler.

## Releases

### Release 0 :

Rapikan kode-kode JavaScript yang diberikan, kurangi penggunakan global scope!

1. Gunakanlah nama-nama yang sesuai untuk fungsi-fungsi tertentu.
2. Pindahkan fungsi-fungsi tersebut ke dalam sebuah ***object***.
3. Untuk setiap callback atau event hadler hanya boleh menggunakan 1 atau 2 baris code.
4. Pisahkanlah kode-kode berdasarkan masalahnya.

### Release 1 : MVC JavaScript

Kamu telah memisahkan dan menamai fungsi-fungsi yang ada. Kamu harus mengelola kodemu ke dalam sebuah object berdasarkan fungsinya.

1. Semua DOM elemen yang berhubungan dengan tampilannya harus disimpan di layer view object.
2. Semua kode yang tidak ada hubungannya dengan DOM elemen disimpan di tempat yang berbeda seperti controller object atau model object
3. Controller object harus dapat menangani proses komunikasi antara view object dan model object sebaik mungkin.
