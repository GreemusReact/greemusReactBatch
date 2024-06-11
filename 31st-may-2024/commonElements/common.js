function common(x, y) {
  let cArray = [];
  for (i = 0; i <= x.length; i++) {
    if (y.includes(x[i])) {//array method
      cArray.push(x[i]);
    }
  }
  return `common array = ${cArray}`;
}
let arr1 = [2, 3, 4, 5, 6, 7];
let arr2 = [3, 4, 7, 8, 9];
console.log(common(arr1, arr2));

