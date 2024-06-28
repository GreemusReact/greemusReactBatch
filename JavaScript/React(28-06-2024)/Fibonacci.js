function fibonacci(n) {
    let fibo = [0, 1];
    if (n <= 1) {
        return fibo;
    }
    while (fibo.length < n) {
        let x = fibo[fibo.length-1] + fibo[fibo.length-2];
        fibo.push(x);
    }
    console.log("The first " + n + " numbers of fibonacci series is :\n" + fibo );
}

fibonacci(7);