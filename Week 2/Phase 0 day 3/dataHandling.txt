function dataHandling(arr) {
  for(var index1=0; index1<arr.length; index1++){
    console.log('Nomor ID: ' + arr[index1][0]);
    console.log('Nama Lengkap: ' + arr[index1][1]);
    console.log('TTL: ' + arr[index1][2]);
    console.log('Hobi: ' + arr[index1][0]);
    console.log('');
  }
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

console.log(dataHandling(input));