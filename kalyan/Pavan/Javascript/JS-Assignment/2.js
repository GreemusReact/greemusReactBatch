function stringLengths(arr) {
    return arr.map(str => str.length);
}
let strings = ["pavan", "kalyan", "javascript", "reactjs"];
let lengths = stringLengths(strings);
console.log(lengths);
