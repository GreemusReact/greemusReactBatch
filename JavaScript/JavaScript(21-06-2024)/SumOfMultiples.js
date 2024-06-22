function sumMultiples(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
         sum += i;
    }
}
console.log("Sum of all multiples of 3 and 5 up to " + n + " is: " + sum);
}

sumMultiples(10);