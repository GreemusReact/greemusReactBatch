function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}


let numbers = [1,1,2,2,3,3,4,4,5,5,6,6];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 
