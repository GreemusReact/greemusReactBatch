function removeDuplicates(arr) {
  let res = arr.filter((item, index) => arr.indexOf(item) == index);
  return res;
}
let array = [1, 2, 3, 3, 2, 4, 5, 6, 3, 5, 6, 1, 3, 5, 6, 3, 4];
console.log(removeDuplicates(array));
