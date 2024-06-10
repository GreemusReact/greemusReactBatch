function convertToUpperCase(strings) {
    return strings.map(str => str.toUpperCase());
}

const strings = ["hello", "world", "JavaScript"];
const uppercaseStrings = convertToUpperCase(strings);
console.log("Uppercase strings:", uppercaseStrings);
