function capitalizeFirstLetter(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

// Example usage:
let strings = ["pavan", "kalyan", "javascript", "reactjs"];
let capitalizedStrings = capitalizeFirstLetter(strings);
console.log(capitalizedStrings); 
