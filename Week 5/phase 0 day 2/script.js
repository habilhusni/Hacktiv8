//deklarasi dom id eldest-parent
var eldestParent = document.getElementById('eldest-parent');

//deklarasi array eldestParent
var childEldest = eldestParent.children;

//deklarasi anak pertama dari array childEldest
var firstChildEldest = childEldest[0];

//mengubah properti firstChildEldest
firstChildEldest.innerHTML = 'Diakses Melalui Eldest Parent';

//menampilkan perubahan firstChildEldest
console.log('Saya Adalah Keturunan Pertama menjadi ' + firstChildEldest.innerHTML);

//deklarasi dom id a-child
var aChild = document.getElementById('a-child');

//deklarasi sibling sebelumnya
var aChildPrevSibling = aChild.previousElementSibling;

//mengubah properti prevsibling
aChildPrevSibling.innerHTML = 'Diakses Melalui a Child';

//menampilkan perubahan prevsibling
console.log('Saya adalah Generasi Termuda, yang paling Tua menjadi ' + aChildPrevSibling.innerHTML);

//deklarasi sibling setelahnya
var aChildNextSibling = aChild.nextElementSibling;

//mengubah properti nextsibling
aChildNextSibling.innerHTML = 'Diakses Melalui a Child';

//menampilkan nextsibling
console.log('Saya adalah Generasi Termuda, yang Paling Muda menjadi ' + aChildNextSibling.innerHTML);

//deklarasi chaining-selector parent and nextSibling
var parentParentSibling = aChild.parentNode.parentNode.nextElementSibling;

//mengubah properti parent-sibling chaining-selector
parentParentSibling.innerHTML = 'Diakses Melalui a Child';

//menampilkan parent-sibling chaining-selector
console.log('Saya adalah Generasi yang Cukup Tua menjadi ' + parentParentSibling.innerHTML);