function even(arr) {
  for (i = 0; i <= arr.length; i++) {
    if (i % 2 == 0) {
      console.log("this is even number:", i);
    } else {
      console.log("this is odd number:", i);
    }
  }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
even(array);

function swapping(value1, value2) {
  let temp;
  temp = value1;
  value1 = value2;
  value2 = temp;
  console.log(value1);
  console.log(value2);
}
swapping(4, 6);

function prime(num) {
  for (i = 2; i <= num; i++) {
    primeNumber = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        primeNumber = false;
        break;
      }
    }
    if (primeNumber) {
      console.log(i);
    }
  }
}
prime(100);

function sumOfNumber(num) {
  let sum = 0;
  for (i = 0; i <= num.length; i++) {
    sum += i;
  }
  console.log(sum);
}
let array1 = [1, 2, 3, 4, 5];
sumOfNumber(array1);

function reverseStr(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}
let string = "sharvani"; //inavrahs
reverseStr(string);

function filterArray(arr) {
  let array = arr.map((ele) => {
    return ele * 4;
  });
  console.log(array);
}
let ar = [1, 2, 3, 4];
filterArray(ar);
