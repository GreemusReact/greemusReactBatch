 console.log('Find Missing Number')

 function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sumOfArray = (n * (n + 1)) / 2;

    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        sum+=arr[i];
    }

    let missingNumber = sumOfArray - sum;

    return missingNumber;
}

let arr = [1, 2, 5, 4, 6, 8, 7];
let missingNumber = findMissingNumber(arr);
console.log("Missing Number: ", missingNumber);
