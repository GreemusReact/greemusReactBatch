function merge(arr1, arr2) {
  let res = arr1.concat(arr2).sort();
  return `merge and sort = ${res}`;
}
let array1 = [5, 2, 3, 1, 4, 6];
let array2 = [9, 8, 6, 7, 3, 4, 2, 1];
console.log(merge(array1, array2));
