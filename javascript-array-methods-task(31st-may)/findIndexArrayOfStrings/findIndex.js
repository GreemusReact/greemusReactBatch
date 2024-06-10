function arrayOfStringsIndex(arr, str) {
  return arr.indexOf(str);
}
let array = ["venky", "cherry", "ram", "chiru"];
console.log(arrayOfStringsIndex(array, "ram")); //2
console.log("--------");
console.log(arrayOfStringsIndex(array, "rohit")); //-1
