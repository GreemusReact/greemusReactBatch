function findOddNumbers(arr) {
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd.push(arr[i]);
        }
    }
    console.log("Given array is: ");
    console.log(arr);
    console.log("Array of odd numbers of given array is: ");
    console.log(odd);
}

var x = [5, 2, 4, 8, 7, 10, 14, 19, 1];
findOddNumbers(x);