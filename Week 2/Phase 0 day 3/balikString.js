function balikString(str) {
  var str2 = '';
  for(var index=(str.length-1); index>=0; index--){
    str2 = str2 + str[index];
  }
  return str2;
}

var String1 = 'Hello world!'

console.log(balikString(String1));