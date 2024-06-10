function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

let numbers = [1, 2, 3, 4, 5];
let sum = sumArray(numbers);
console.log(sum); 
