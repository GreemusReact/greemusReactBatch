function palindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return `this is not a palindrome ${str}`;
    } else {
      return `this is a palindrome ${str}`;
    }
  }
}
let res = "121";
console.log(palindrome(res));
let res2 = "hello";
console.log(palindrome(res2));
