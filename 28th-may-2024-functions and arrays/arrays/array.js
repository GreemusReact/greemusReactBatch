//concat
var x = [1, 2, 3, false, "venky"];
var y = [4, 5, true, "maicherla"];
let z = x.concat(y);
console.log(z);

//constructor
let arr = [1, 2, 3, 4, 5, 6];
let array = arr.constructor;
console.log(array);

//entries
let arr1 = ["venky", "chiru", "cherry", "ram"];
let array2 = arr1.entries();
for (let entry of array2) {
  console.log(entry);
}

//every
let arr2 = [2, 4, 6, 7, 8, 13, 14];
function isEvery(num) {
  return num % 2 == 0;
}
let checkEvery = arr2.every(isEvery);
console.log(checkEvery);

//fill
let arr3 = ["venky", "chiru", "cherry", "ram"];
arr3.fill("venky");
console.log(arr3);

//filter
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// function checkDivisibleBytwo(element) {
//   if (element % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let filteredArray = arr4.filter(checkDivisibleBytwo);
// console.log(filteredArray);

let filterArray = arr4.filter((element) => {
  return element % 2 == 0;
});
console.log(filterArray);

//find
let arr5 = [2, 3, 4, 5, 6, 7];
function checkFind(num) {
  if (num % 2 !== 0) {
    return true;
  }
}
let checkValue = arr5.find(checkFind);
console.log(checkValue); //it prints the 1st value of satisfy that condition;
let checkValue2 = arr5.findIndex(checkFind);
console.log(checkValue2); //it gives 1st value index
let checkValue3 = arr5.findLastIndex(checkFind);
console.log(checkValue3);

//flat
let arr6 = [1, [2, [3, 4, 5, [6, 7, 8]]]];
let reCheck = arr6.flat(2);
console.log(reCheck);

//flatMap

let arr7 = [1, 2, 3, 4, 5];
let squers = arr7.flatMap((result) => result * 2);
console.log(squers);

//forEach
let arr8 = [2, 3, 4, 5];
let squere = [];
arr8.forEach((ele) => {
  squere.push(ele * 3);
});
console.log(squere); //Foreach does not create a new array

//map
let mapArray = arr8.map((ele) => {
  return ele * 5;
});
console.log(mapArray); //map creates a new array

//from
let arr9 = Array.from("venkatesh");
console.log(arr9);

//includes
let arr10 = ["venky", "cherry", "ram"];
let newArr10 = arr10.includes("cherry");
console.log(newArr10);

//indexof
let indexArr10 = arr10.indexOf("ram");
console.log(indexArr10);

//push
let pushArr10 = arr10.push("chiru");
console.log("push:", pushArr10);
console.log("after push:", arr10);

//pop
let popArr10 = arr10.pop();
console.log("pop:", popArr10);
console.log("after pop:", arr10);

//shift
let shiftArr10 = arr10.shift();
console.log("shift", shiftArr10);
console.log("after Shift:", arr10);

//unshift
let unshiftArr10 = arr10.unshift("venky");
console.log("unshift:", unshiftArr10);
console.log("after unshift:", arr10);

//slice
let str = "venkatesh";
let newStr = str.slice(2, 6);
console.log("slice:", newStr);

let str1 = ["venky", "javascript", "react", "html"];
let newStr1 = str1.splice(0, 1, "css");
console.log("splice:", newStr1);
console.log("after splice:", str1);

//reverse
let reverseStr = str1.reverse();
console.log("reverse:", reverseStr);

//nine power five value
function power(x, y) {
  return Math.pow(x, y);
}
let result = power(9, 5);
console.log("power value:", result);

var add = new Function("x", "y", "return x+y");
console.log(add(5, 6));
