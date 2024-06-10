function flattenArray(arr) {
    return arr.reduce((flatArray, item) => {
        if (Array.isArray(item)) {
            
            return flatArray.concat(flattenArray(item));
        } else {
            
            return flatArray.concat(item);
        }
    }, []);
}
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); 
