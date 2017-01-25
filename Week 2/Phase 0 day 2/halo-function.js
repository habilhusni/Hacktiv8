function shoutOut(){
  return 'Halo Function!';
}

console.log(shoutOut());


function calculateMultiply(numb1, numb2){
  return numb1*numb2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);

console.log(hasilPerkalian);


function processSentence(nama, umur, alamat, hobi){
  var kalimat = 'Nama saya ' + nama + ', umur saya ' + umur + 'tahun, alamat saya di ' + alamat + ', dan saya punya hobby yaitu ' + hobi + '!';
  return kalimat;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 