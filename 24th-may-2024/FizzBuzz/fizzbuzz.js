function fizzBuzz(number) {
  if (typeof number !== "number" || isNaN(number)) {
    console.log("Nan - Not a number! please enter input");
    return;
  }

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("fizzbuzz");
  } else if (number % 3 === 0) {
    console.log("divisible by 3: fizz");
  } else if (number % 5 === 0) {
    console.log("divisible by 5: buzz");
  } else {
    console.log("Given Input Number:", number);
  }
}

fizzBuzz(15);
fizzBuzz(10);
fizzBuzz(23);
