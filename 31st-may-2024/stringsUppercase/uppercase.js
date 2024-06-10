function arrayStrUpper(strArr) {
  let strUpper = [];
  for (i = 0; i < strArr.length; i++) {
    let res = strArr[i].toUpperCase();
    strUpper.push(res);
  }
  return strUpper;
}
let array = ["venky", "cherry", "ram"];
console.log(arrayStrUpper(array));
