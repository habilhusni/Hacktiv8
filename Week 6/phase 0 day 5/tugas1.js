let transformArrToLowerCase = arr => {
  // Ubah setiap element array menjadi lowercase!
  let newArr = arr.map(isiArr => (isiArr = isiArr.toLowerCase()));

  return newArr;
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']
