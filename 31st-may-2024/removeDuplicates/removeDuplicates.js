function removeDuplicates(arr) {
  var filterArr = [];
  var filterArr = arr.filter((item, index) => arr.indexOf(item) == index);
  return filterArr;
}

let array = [1, 2, 3, 4, 1, 2, 3, 4, 5, 4, 5, 6, 7, 5, 6, 7, 8, 9, 10, 8, 9];
console.log(removeDuplicates(array));
