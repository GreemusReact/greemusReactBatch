var x = 3;
var y = 10;
var z = 8;
if (x >= y && x >= z) {
  console.log(`${x} is a maximum number`);
} else if (y >= x && y >= z) {
  console.log(`${y} is a maximum number`);
} else {
  console.log(`${z} is a maximum number`);
}

function maximumNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
let checkMax = maximumNumber(32, 25);
console.log("maximum number: ", checkMax);
