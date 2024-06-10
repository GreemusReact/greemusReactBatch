function factorial(number) {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`factorial of ${number} is ${fact}`);
}
factorial(5);
