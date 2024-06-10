function reverseStr(arrStr) {
  let reverseArr = [];
  for (i = 0; i < arrStr.length; i++) {
    let reverseString = "";
    for (j = arrStr[i].length - 1; j >= 0; j--) {
      reverseString += arrStr[i][j];
    }
    reverseArr.push(reverseString);
  }
  return reverseArr;
}
let array = ["venky", "cherry", "rohit", "ram"];
console.log("without reversed", array);
console.log(reverseStr(array));
