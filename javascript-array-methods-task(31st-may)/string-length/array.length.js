function stringLength(arr) {
  let maxLength = [];
  for (i = 0; i < arr.length; i++) {
    maxLength.push(arr[i].length);
  }
  return maxLength;
}
let array = ["venky", "cherry", "chiru", "ram"];
console.log(stringLength(array));
