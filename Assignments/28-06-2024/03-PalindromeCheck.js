console.log('Palindrome Check');

function isPalindrome(str){
    this.str=str;
    console.log(str);
    let letters = str.split('');
    let reverseStr = letters.reverse();
    let word= reverseStr.join('');
    console.log(word);
    if(str===word){
        console.log('It is Palindrome');
    }
    else{
        console.log('It is not a Palindrome');
    }
}
isPalindrome('Akhil');