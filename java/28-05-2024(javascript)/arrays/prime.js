// var arr = [2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i <= arr.length; i++) {
//   if (i % 2 == 0) {
//     console.log("even number", i);
//   } else {
//     console.log("odd number", i);
//   }
// }

// function even(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (i % 2 == 0) {
//       console.log("even number", i);
//     } else {
//       console.log("odd number", i);
//     }
//   }
// }
// let evenArray = [2, 3, 4, 5, 6, 7];
// even(evenArray);

//prime
function prime(number) {
    for (i = 2; i <= number; i++) {
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
  let array2 = 100;
  prime(array2);
  
  //fcatorial
  
  function factorial(str) {
    let fact = 1; //1,2,6,24,120
    for (i = 1; i <= str; i++) {
      fact *= i;
      //1*1,1*2,2*3,6*4,24*5
    }
    console.log(fact);
  }
  factorial(5);
  
  //palindrome
  
  function palindrome(str) {
    let len = str.length;
    for (i = 0; i <= len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        console.log("this is not palindrome", str);
      } else {
        console.log("this is palindrome", str);
      }
    }
  }
  palindrome("121");
  palindrome("madam");
  palindrome("hello");
  
  function sumOfAll(arr) {
    let sum = 0;
    for (i = 0; i <= arr.length; i++) {
      sum += i;
    }
    console.log(sum);
  }
  let sAr = [1, 2, 3, 4, 5, 6];
  sumOfAll(sAr);
  
  function reverseStr(str) {
    let newString = "";
    for (i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    console.log(newString);
  }
  reverseStr("venkatesh");