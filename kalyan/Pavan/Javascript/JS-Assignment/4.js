function reverseStrings(arr) {
    return arr.map(str => str.split('').reverse().join(''));
}
let strings = ["pavan", "kalyan", "javascript", "reactjs"];
let reversedStrings = reverseStrings(strings);
console.log(reversedStrings); 
