function sumOfArray(arr) {
  let sum = 0;
  for (i = 0; i <= arr.length; i++) {
    sum += i;
  }
  return `total sum = ${sum}`;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfArray(array));
