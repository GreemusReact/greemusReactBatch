function countOccurance(x, y) {
  return x.reduce((accumulator, ele) => {
    let accumulatorCount = ele === y ? 1 : 0;
    return accumulator + accumulatorCount;
  }, 0);
}
let array = [1, 2, 3, 4, 3, 4, 6, 3, 7, 3, 8];
let res = countOccurance(array, 3);
console.log(res);