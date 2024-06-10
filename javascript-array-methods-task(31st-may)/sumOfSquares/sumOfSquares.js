function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let res = arr[i] * arr[i];
    sum += res;
  }
  return `sum of squares = ${sum}`;
}
let array = [2, 3, 4, 5]; //4+9+16+25
console.log(sumOfSquares(array)); //54
