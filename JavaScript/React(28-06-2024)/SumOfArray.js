function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log("Given array is :");
    console.log(array);
    console.log("Sum of all numbers in array is : " + sum);
}

let x = [2,4,6,3,1,7,10];
arraySum(x);