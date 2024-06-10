function findLongestString(arr) {
    if (arr.length === 0) {
        return null; 
    }
    
    let longest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]; 
        }
    }
    
    return longest;
}
let strings = ["pavan", "kalyan", "greemus", "software","technologies"];
let longestString = findLongestString(strings);
console.log(longestString); 
