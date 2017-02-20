let reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  let nilaiMax = arr.reduce((initNum, isiArr)=>Math.max(initNum, isiArr), 0);

  return nilaiMax;
}

console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9