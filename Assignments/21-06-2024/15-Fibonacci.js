console.log('Fibonacci Series');

function printFibonacci(n) {
    let a = 0, b = 1, c;
    for (let i = 0; i <= n; i++) {
      c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
  }
  printFibonacci(10);