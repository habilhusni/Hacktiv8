//masukan input
var namaPengembara = 'Udin'; 
var umurPengembara = 20;
var namaAhli = 'Ngkong'
var pekerjaanAhli = 'Tukang Peci'
var batuBatu = ['sutu', 'kadal'];

//saring kata menjadi tidak memiliki huruf yang sama
function kataUnik(unik) {
	var nonUnique = unik;
	var unique = nonUnique.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
	return unique;
}

//saring kata1 dengan kata2
function saring(kataPertama, kataKedua) {
	var kata3 = '';
	if(kataUnik(kataPertama).length >= kataUnik(kataKedua).length){
		for(var i=0; i<kataUnik(kataPertama).length; i++) {
			for(var j=0; j<kataUnik(kataKedua).length; j++){
				if(kataUnik(kataPertama).charAt(i) === kataUnik(kataKedua).charAt(j)){
					kata3 = kata3 + kataUnik(kataPertama).charAt(i);
				}
			}
		}
	}else if(kataUnik(kataKedua).length > kataUnik(kataPertama).length){
		for(var i=0; i<kataUnik(kataKedua).length; i++) {
			for(var j=0; j<kataUnik(kataPertama).length; j++){
				if(kataUnik(kataKedua).charAt(i) === kataUnik(kataPertama).charAt(j)){
					kata3 = kata3 + kataUnik(kataKedua).charAt(i);
				}
			}
		}
	}

	return kata3;
}
for(var i=0; i<(batuBatu.length-1); i++){
	batuBatu[i+1] = saring(batuBatu[i], batuBatu[i+1]);
}

//Objek pengembara
var pengembara = function(nama, umur, banyakBatu) {
	this.nama = nama;
	this.umur = umur;
	this.banyakBatu = banyakBatu;
}

//Objek ahli
var ahli = function(nama, pekerjaan) {
	this.nama = nama;
	this.pekerjaan = pekerjaan;
	this.tebakPermata = function(nama3) {
		if(nama3.banyakBatu.length !== 0){
			console.log('Selamat anda mendapatkan ' + nama3.banyakBatu.length + ' permata');
		}else if(nama3.banyakBatu.length === 0){
			console.log('Mohon maaf anda tidak mendapatkan permata');
		}
	}
}

var udin = new pengembara(namaPengembara, umurPengembara, batuBatu[(batuBatu.length-1)]);
var ngkong = new ahli(namaAhli, pekerjaanAhli);

//Percakapan 
console.log('Siapa nama anda, pengembara?');
console.log('Nama saya ' + udin.nama + ' dan siapakah anda?');
console.log('Nama saya ' + ngkong.nama + ' dan saya adalah seorang ' + ngkong.pekerjaan);
console.log('Anda telah mengembara dan mendapatkan beberapa batu, saya dapat mengetahui berapa jumlah batu permata yang kau dapatkan');
console.log('Berapa batu permata yang saya dapatkan, ' + ngkong.nama + '?');
ngkong.tebakPermata(udin);
