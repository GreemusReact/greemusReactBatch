// function countOccurance(x, y) {
//   return x.reduce((accumulator, ele) => {
//     let accumulatorCount = ele === y ? 1 : 0;
//     return accumulator + accumulatorCount;
//   }, 0);
// }
// let array = [1, 2, 3, 4, 3, 4, 6, 3, 7, 3, 8];
// let res = countOccurance(array, 3);
// console.log(`countOccurance=${res}`);

function countOccurance(x, y) {
  return x.reduce((acc, ele) => {
    let accCount = ele === y ? 1 : 0;
    return acc + accCount; //0+0+1+0+0+0+0+0+1+0+0+1+0+1+0+0
  }, 0);
}
let array = [2, 3, 4, 5, 6, 7, 2, 3, 4, 2, 3, 2, 3, 4, 2];
let res = countOccurance(array, 3);
console.log(res);
