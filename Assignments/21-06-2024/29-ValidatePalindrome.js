console.log('Palindrome Checker');

function checkPalindrome(string){
    let length = string.length;
    for(let i=0;i<length/2;i++){
        if(string[i]!==string[length-1-i]){
            return 'It is not a palindrome '+string;
        }
    }
    return 'it is a palindrome ' + string;
}
console.log(checkPalindrome('racecar'));