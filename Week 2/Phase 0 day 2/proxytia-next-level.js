var nama = 'Habil';
var peran = 'Ksatria';
var tahunLahir = 2010;
var umur = 2016 - tahunLahir;
var playerHealth = tahunLahir*Math.random();
var monsterHealth = tahunLahir*Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));


if(nama === ''){
  peran = 'kacung';
  console.log('Nama tidak boleh kosong');
}else {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
}

if(peran === ''){
  console.log('Pilih peranmu untuk memulai game');
}else if(peran === 'Ksatria'){
  console.log('Halo Ksatria ' + nama +', kamu dapat menyerang dengan senjatamu!');
}else if(peran === 'Tabib'){
  console.log('Halo Tabib ' + nama +', kamu membantu temanmu yang terluka.');
}else if(peran === 'Penyihir'){
  console.log('Halo Penyihir ' + nama +', ciptakan keajaiban yang membantu kemenanganmu!');
}



for(var index=1; index<=tahunLahir; index++){
  if(index%umur === 0){
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth = monsterHealth - umur;
  }else if(index%kodeMonster === 0){
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth = playerHealth - kodeMonster;
  }else if((index%kodeMonster === 0)  &&  (index%umur === 0)){
    console.log('Health keduanya bertambah');
    playerHealth = playerHealth + kodeMonster;
    monsterHealth = monsterHealth + umur;
  }
}

if(playerHealth > monsterHealth){
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}else if(playerHealth < monsterHealth){
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}





