function isPrime(x) {
    let prime = true;
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            prime = false;
            break;
        }
    }
    console.log(x + " is a prime number");
    console.log(prime);
}

isPrime(17);
isPrime(21);