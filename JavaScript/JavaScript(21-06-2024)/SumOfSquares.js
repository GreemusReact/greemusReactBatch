function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let s = i * i;
        sum += s;
    }
    console.log("Sum of squares of numbers from 1 to " + n + " is: " + sum);
}

sumOfSquares(5);
