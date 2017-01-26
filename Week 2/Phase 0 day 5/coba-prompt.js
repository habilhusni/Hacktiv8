var nonUnique = 'semangka';
var unique = nonUnique.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; });
console.log(unique);
