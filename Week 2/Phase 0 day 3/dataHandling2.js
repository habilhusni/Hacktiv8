function dataHandling2(arr){
  arr.splice(4, 1, 'Pria', 'SMA Internasional Metro');
  console.log(arr);
  var ttl = arr[3].split('/');
  var arrBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  var tanggal = ttl[0];
  var bulan = arrBulan[ttl[1]-1];
  var tahun = ttl[2];
  console.log(bulan);
  ttl.sort(function(value1, value2){ return value2 - value1;});
  console.log(ttl);
  ttl.join(' and ');
  var ttl2 = ttl.join('-');
  console.log(ttl2);
  var namaKata = arr[1].slice(0, 16);
  console.log(namaKata);
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
