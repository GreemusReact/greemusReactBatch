// var x = 10;
// document.write(x);
// console.log(x);
// alert(x);
// document.getElementById("xvalue").innerHTML = x;

//var let const
// var x = 6;
// document.write(x);

// let y = 10;
// let y = 20;
// console.log(y + y);

// const z = 20;
// const z = 30;

// function myself() {
//   let x = 30;
//   console.log(x);
// }
// myself();

//data types
// numbers
//strings
//boolean
//null
//undefined
//arrays
//objects

//primitive and non-primitive

// var x = 10;
// var y = "10";
// var z = false;
// var c = null;
// var d;

// var arr = [10, "10", false, "venky"];
// console.log(arr);
// document.getElementById("array").innerHTML = arr;
// var obj = {
//   collage: "pydah",
//   name: "venky",
//   roll: 234,
// };
// console.log(typeof obj);

//operators
//Arithemetic operators

//addition
// var x = 30;
// var y = 40;
// document.write(x + y); //output:70

//addition
// var num1 = 23;
// var num2 = 32;

// document.write("<br> addition", "=", num1 + num2);

//sub
// var x = 56;
// var y = 43;
// console.log("sub=", x - y);
// console.log("mul=", x * y);
// console.log("divi =", x / y);
// console.log("% =", x % y);

//comparison
// var x = 20; //num
// var y = "30"; //string
// console.log(x == y); //false

// console.log(x === y); //false
// var z = 45;
// var k = 18;
// console.log("greaterthan =", z > k); //true
// console.log("lessthan =", z < k); //false
// console.log(z >= k);
// console.log(z <= k);

//logical operators
// var x = 5;
// var y = 10;
// console.log("AND Operator =", x > 20 && y < 20);

// console.log("OR Operator =", x < 20 || y > 20);
// console.log("not =", !x);

//assignment operators
// var x = 30;
// var y = 50;
// var z = x + y;
// console.log((z += x)); //z= z+x
// console.log((z -= x));
// console.log((z *= x));
// console.log((z /= x));
// console.log((z %= x));

//ternary operator (?)

// var x = 20;
// var y = 60;
// console.log(x < y ? x : y);

//bitwise operators
// var x = 30;
// var y = 40;
// console.log((x > y) & (y > x)); //0
// console.log((x > y) | (y > x)); //1

// var z = 4;
// console.log(z >> 1);
// console.log(z << 1);

var arr = [1, 2, false, "html", { name: "venky" }, [1, 2, 3]];
// var arr = "string";
console.log(typeof arr); //In JavaScript, arrays are a type of object.
console.log(Array.isArray(arr)); //true
