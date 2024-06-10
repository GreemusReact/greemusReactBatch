function longestStr(arrStr) {
  let longestStr = "";
  for (i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length > longestStr.length) {
      //0,5>0,8>5
      longestStr = arrStr[i];
    }
  }
  return longestStr;
}
let array = ["venky", "rohit", "venkatesh", "cherry"];
console.log(longestStr(array));
