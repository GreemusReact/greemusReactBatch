function prime(number) {
  let arr = [];
  for (let i = 2; i <= number; i++) {
    let isPrime = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  console.log("prime numbers", arr);
}
prime(100);

function prime(number) {
  let isPrime = true;
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log("this is a prime number", number);
  } else {
    console.log("this is not a prime number", number);
  }
}
prime(23);
prime(25);
prime(97);
