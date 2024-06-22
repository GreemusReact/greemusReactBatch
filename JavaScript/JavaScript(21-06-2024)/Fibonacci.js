function fibonacci(n) {
    let s = [0, 1];
    if(n <= 1) {
        return s;
    }
    while (s.length < n) {
        s.push(s[s.length-1]+s[s.length-2]);
    }
    console.log("The fibonacci series of first "+ n + " numbers is: " + s);
}

fibonacci(8);