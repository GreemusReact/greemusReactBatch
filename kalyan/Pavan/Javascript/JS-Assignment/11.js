function countOccurrences(arr) {
    let occurrences = {};
    
    arr.forEach(item => {
        if (occurrences[item]) {
            occurrences[item]++;
        } else {
            occurrences[item] = 1;
        }
    });
    
    return occurrences;
}

let strings = ["pavan", "kalyan", "javascript","pavan", "javascript", "reactjs"];
let occurrences = countOccurrences(strings);
console.log(occurrences); 
