//even number
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

//remove duplicates
let removeArray = [
  1, 2, 3, 4, 5, 1, 2, 2, 3, 4, 5, 3, 4, 5, 6, 3, 4, 7, 8, 9, 6,
];
function removeDuplicates(arr) {
  let newArr = [...new Set(arr)];
  console.log(newArr);
}
removeDuplicates(removeArray);

//prime numbers
function prime(num) {
  for (i = 2; i <= num; i++) {
    let isPrime = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
prime(100);

//swapping numbers
function swapping(x, y) {
  let temp;
  temp = x;
  x = y;
  y = temp;
  console.log(x);
  console.log(y);
}
swapping(6, 7);

//maxnumber
function maxNumber(x, y, z) {
  if (x > y && x > z) {
    console.log("x maxNumber number", x);
  } else if (y > x && y > z) {
    console.log("y is the maxNumber number", y);
  } else {
    console.log("z is the maxNumber", z);
  }
}
maxNumber(3, 9, 6);

//factorial
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

//sumofnumbers
function sumOfAll(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`sum of arr is ${sum}`);
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
sumOfAll(array1);

//reverseAstring
function reverseStr(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}
let str = "venkatesh";
reverseStr(str);

//averagegrade
function averageGrade(arr) {
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
console.log("Grade:", averageGrade(arr));

//filtered array
function filterArray(arr) {
  let array = arr.map((ele) => {
    return ele * 4;
  });
  console.log(array);
}
let ar = [1, 2, 3, 4];
filterArray(ar);

//plaindrome
const str2 = prompt("Enter a string: ");
function Palindrome(str2) {
  const len = str2.length;
  for (let i = 0; i < len / 2; i++) {
    if (str2[i] !== str2[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
const result = Palindrome(str2);
console.log(result);

//secondlargenumber
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

//mergetwoarray
let array12 = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function mergeArray(arr1, arr2) {
  let arr = array12.concat(array2);
  let newArr = [...new Set(arr)];
  console.log(newArr);
}
mergeArray(array12, array2);

//fizzbuzz
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
