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