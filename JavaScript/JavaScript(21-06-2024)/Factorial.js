function factorial(n) {
   if (n == 1) {
    console.log("factorial of 1 is : 1");
   }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    console.log("Factorial of " + n + " is: " + fact);
}

factorial(6);
