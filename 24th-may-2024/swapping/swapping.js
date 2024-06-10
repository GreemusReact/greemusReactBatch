let var1 = prompt("Enter the variable here!");
let var2 = prompt("Enter the variable here!");
console.log(`variables1: ${var1}`);
console.log(`variables2: ${var2}`);

let temp;
temp = var1;
var1 = var2;
var2 = temp;

console.log(`swapping variable1: ${var1}`);
console.log(`swapping variable2: ${var2}`);
