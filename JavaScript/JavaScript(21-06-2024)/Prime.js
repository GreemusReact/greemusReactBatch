function isPrime(n) {
    let prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    console.log(n + " is a prime number");
    if (prime == true) {
        console.log(true);
    } 
    else {
        console.log(false);
    }
}

isPrime(4);
isPrime(11);
