// array is non-primitive data type
//non-primitive is nothing but to store multiple values in a single variable
//denoted by function []

var array = [1, 2, "string", false, { name: "javascript" }, [2, 3, "html"]];
console.log(array);

//concat
var x = [1, 2, 3];
var y = [4, 5, 6];
let z = x.concat(y);
console.log(z);

//push

var xx = ["html", "css", "javascript", "react"];
let yy = xx.push("bootstrap");
console.log(yy);
console.log(xx);

//unshift
let zz = xx.unshift("bootstrap");
console.log(xx);

//pop
let vPop = xx.pop();
console.log(vPop);
console.log(xx);

//Shift
let vShift = xx.shift();
console.log(xx);

//map
let OriginalArr = [1, 2, 3, 4, 5, 6]; //3,6,9,12,15,18

let newYarr = OriginalArr.map(function (ele) {
  return ele * 3;
});
console.log("function", newYarr);

let newArr = OriginalArr.map((sharvani) => {
  return sharvani * 3;
});
console.log("arrow Function:", newArr);
console.log(OriginalArr);

//forEach
OriginalArr.forEach((ele) => ele * 3);
console.log(OriginalArr);

//find
var fArr = [1, 2, 3, 2, 4, 6, 5, 4, 7, 8];
function checkFind(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
let checkValue = fArr.find(checkFind);
console.log(checkValue);
console.log(fArr);

//findIndex
let checkValue2 = fArr.findIndex(checkFind);
console.log(checkValue2); //1

//findLastIndex
let checkLast = fArr.findLastIndex(checkFind);
console.log(checkLast); //9

//filter
var variable = [1, 2, 3, 4, 5, 6];
let newFilter = variable.filter((ele) => {
  if (ele % 2 !== 0) {
    return true; //1,3,5
  }
});
console.log(newFilter);

//slice
var str = "javascript";
var result = str.slice(2, 5); //vas
console.log("slice:", result);

//splice
var str2 = ["html", "sony", "react"];
let rstr2 = str2.splice(1, 2, "css", "javscript");
console.log(rstr2);
console.log(str2);