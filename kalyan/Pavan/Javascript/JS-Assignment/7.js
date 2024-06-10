function stringsContainCharacter(arr, char) {
    return arr.filter(str => str.includes(char));
}

// Example usage:
let strings = ["pavan", "kalyan", "javascript", "reactjs","python"];
let filteredStrings = stringsContainCharacter(strings, 'a');
console.log(filteredStrings); // Output: ["apple", "banana", "orange"]
