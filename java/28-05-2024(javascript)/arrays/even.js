//strings primitive data types
// singel variable , 1 data

//
var str = "rohit";
console.log(typeof str);
var result = str.charAt(3); //output:i
console.log(result);

//concat
var x = "rohit";
var y = "hitman";
var z = x.concat(y);
console.log(z);

//replace

var reStr = "bat";
let resultRe = reStr.replace("t", "d"); //output :cat
console.log(resultRe);

//split
var naStr = "learnjavascript";
let nameStr = naStr.split("");
console.log(nameStr);

//subStr
var subName = "venkatesh";
let resultSub = subName.substr(3, 7); //kate
console.log(resultSub);

let upper = subName.toUpperCase();
console.log(upper);

//trim
let trimStr = "   javascript     ";
let ResTrim = trimStr.trim();
console.log(ResTrim);

//includes

let includesStr = "learn javscript";
let reIncludes = includesStr.includes("venky"); //true
console.log(reIncludes);

//padStart
let ss = "venky";
let reS = ss.padStart(5, "*");
console.log(reS);

// string definition
let string1 = "CODE";
let paddedString = string1.padStart(10, "*");
console.log(paddedString);

// Output: ******CODE

//padEnd

let pEnd = "venky";
// document.write(pEnd.padEnd(5, "*"));
