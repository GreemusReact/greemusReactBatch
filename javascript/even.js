function even(str) {
  for (i = 0; i <= str.length; i++) {
    let res = str[i] % 2 === 0 ? str[i] : str[i];
    return res;
  }
}
let arr = [2, 3, 4, 5, 6, 7];
console.log(even(arr));
