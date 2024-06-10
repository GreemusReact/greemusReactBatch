function flatArray(arr) {
  let res = arr.flat(2);
  return res;
}
let array = [1, 2, [3, 4, [5, 6, 7, [8, 9]]]];
console.log("original array", array);
console.log(flatArray(array));
