var objek = {
  "arr" : [
    {
      "hari": "Senin",
      "kehadiran": "Masuk",
      "alasan": ""
    },
    {
      "hari": "Selasa",
      "kehadiran": "Masuk",
      "alasan": ""
    },
    {
      "hari": "Jumat",
      "kehadiran": "Absen",
      "alasan": "Dinas Luar"
    }
  ]
}

var totalHari = 0;
var totalMasuk = 0;
var totalAbsen = 0;

for(var index=0; index<objek.arr.length; index++){
  console.log('Hari: '+ objek.arr[index].hari);
  console.log('Kehadiran: '+ objek.arr[index].kehadiran);
  console.log('Alasan: '+ objek.arr[index].alasan);
  console.log('');
  if(objek.arr[index].hari !== ''){
    totalHari = totalHari + 1;
  }
  if(objek.arr[index].kehadiran === 'Masuk'){
    totalMasuk = totalMasuk + 1;
  }
  if(objek.arr[index].kehadiran === 'Absen'){
    totalAbsen = totalAbsen + 1;
  }
}

console.log('Total hari kerja minggu ini: ' + totalHari + ' hari');
console.log('Total Masuk: ' + totalMasuk + ' hari');
console.log('Total Tidak Masuk: ' + totalAbsen + ' hari');
