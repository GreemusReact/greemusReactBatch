function isPalindrome(str) {
    let s = "";
    for (let i = str.length-1; i >= 0; i--) {
        s += str[i];
    }
    if  (str == s) {
        console.log(true);
    }   
    else {
        console.log(false);
    }
}

let a = "racecar";
console.log("Given string is: " + a);
console.log(a + " is a palindrome")
isPalindrome(a);
