function even(num) {
  for (let i = 0; i <= num.length; i++) {
    if (num[i] % 2 == 0) {
      console.log("this is even number:", num[i]);
    } else {
      console.log("this is odd number:", num[i]);
    }
  }
}
let array = [2, 3, 4, 5, 6, 7, 8, 10, 11];
even(array);

let removeArray = [
  1, 2, 3, 4, 5, 1, 2, 2, 3, 4, 5, 3, 4, 5, 6, 3, 4, 7, 8, 9, 6,
];
function removeDuplicates(arr) {
  let newArr = [...new Set(arr)];
  console.log(newArr);
}
removeDuplicates(removeArray);

function prime(num) {
  let primeArray = [];
  for (i = 2; i <= num; i++) {
    let isPrime = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeArray.push(i);
    }
  }
  console.log(primeArray);
}
prime(100);

function swapping(x, y) {
  let temp;
  temp = x;
  x = y;
  y = temp;
  console.log(x); //7
  console.log(y); //6
}
swapping(6, 7);

function maxNumber(x, y, z) {
  if (x > y && x > z) {
    console.log("this is maximun number", x);
  } else if (y > x && y > z) {
    console.log("y is the maximum number", y);
  } else {
    console.log("z is the maxminum", z);
  }
}
maxNumber(3, 9, 6);

function factorial(num) {
  if (num === 0) {
    console.log("num does not exit using zero");
  } else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
      fact *= i;
    }
    console.log(`num of ${num} is ${fact}`);
  }
}
factorial(5);

function sumOfAll(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`sum of arr is ${sum}`);
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
sumOfAll(array1);

function reverseStr(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}
let str = "venkatesh";
reverseStr(str);

function calculateAverageGrade(arr) {
  let totalMarks = 0;
  for (let mark of arr) {
    totalMarks += mark;
  }
  const averageMarks = totalMarks / arr.length;
  if (averageMarks < 70) {
    return "D";
  } else if (averageMarks < 80) {
    return "C";
  } else if (averageMarks < 90) {
    return "B";
  }
  return "A";
}
const arr = [55, 85, 55, 65];
console.log("Grade:", calculateAverageGrade(arr));

function filterArray(arr) {
  let array = arr.map((ele) => {
    return ele * 4;
  });
  console.log(array);
}
let ar = [1, 2, 3, 4];
filterArray(ar);

// const str2 = prompt("Enter a string: ");
// function Palindrome(str2) {
//   const len = str2.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str2[i] !== str2[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }
// const result = Palindrome(str2);
// console.log(result);

function secondLargeNumber(x, y, z) {
  if (x >= y && x >= z) {
    if (y >= z) {
      console.log(`${y} is the second largest number`);
    } else {
      console.log(`${z} is the second largest number`);
    }
  } else if (y >= x && y >= z) {
    if (x >= z) {
      console.log(`${x} is the second largest number`);
    } else {
      console.log(`${z} is the second largest number`);
    }
  } else {
    if (x >= y) {
      console.log(`${x} is the second largest number`);
    } else {
      console.log(`${y} is the second largest number`);
    }
  }
}
secondLargeNumber(67, 23, 45);

let array12 = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function mergeArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let newArr = [...new Set(arr)];
  console.log(newArr);
}
mergeArray(array12, array2);

function fizzBuzz(number) {
  if (number % 3 === 0) {
    console.log("fizz");
  }
  if (number % 5 === 0) {
    console.log("buzz");
  }
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("fizzbuzz");
  } else {
    console.log("given number", number);
  }
}
fizzBuzz(45);
fizzBuzz(12);
fizzBuzz(23);

//fabicon
function fabicon(number) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  let str = [];
  for (let i = 1; i <= number; i++) {
    str.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log("fabiconSeries:", str);
}
let number = 5;
fabicon(number);

//factorial
function factorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log("factorial:", fact);
}
factorial(5);

//fizzBuzz
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("fizzbuzz");
  } else if (number % 3 === 0) {
    console.log("fizz");
  } else if (number % 5 == 0) {
    console.log("buzz");
  } else console.log("doesnt divisible by 3 and 5");
}
fizzBuzz(15);
fizzBuzz(21);
fizzBuzz(25);
fizzBuzz(23);

//greatest common divisible

function greatest(x, y) {
  let gcd;
  for (let i = 1; i <= x && i <= y; i++) {
    if (x % i === 0 && y % i === 0) {
      gcd = i;
    }
  }
  console.log("greatest gcd:", gcd);
}
greatest(35, 40);

//largest number;

function largest(arr) {
  let lar = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lar) {
      lar = arr[i];
    }
  }
  console.log("largest:", lar);
}
let lArr = [2, 3, 6, 7, 9, 12, 34, 78];
largest(lArr);

//mergeTwoarrays

function merge(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  console.log("merge two arrays:", arr3);
}
let oAr = [1, 2, 3];
let oAr2 = ["venky", false, { name: "javascript" }];
merge(oAr, oAr2);

//removeduplicates
let remove = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6];
function removeDuplicates(arr) {
  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log("removeDuplicates:", newArr);
}
removeDuplicates(remove);

//plaindrome
function palindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      console.log("this is not palindrome", str);
    } else {
      console.log("this is a palindrome", str);
    }
  }
}
palindrome("121");
palindrome("123");
palindrome("madam");
palindrome("hello");

//reverseString
function reverseString(str) {
  let newString = "";
  for (i = str.length - 1; i >= str[i]; i--) {
    newString += str[i];
  }
  return newString;
}
let str2 = "venkatesh";
console.log(reverseString(str2));
