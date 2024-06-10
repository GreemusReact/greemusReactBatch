let number1 = [1,2,3,4,5];
let number2 = [6,7,8,9,10];
let names = ["Eleven","Twelve","Thirteen","Fourteen","Fifteen"];
let maxNumber = Math.max.apply(null,number1);
console.log(maxNumber);
let minNumber = Math.min.apply(null,number1);
console.log(minNumber);
number1.push.apply(number1,names);
console.log(number1);