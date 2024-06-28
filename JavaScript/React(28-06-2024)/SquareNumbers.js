function squareNumbers(arr) {
    let squares = [];
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i]**2;
        squares.push(a);
    }
    console.log("Given array is :");
    console.log(arr);
    console.log("Squares of each number of array are :");
    console.log(squares);
} 

let a = [1,2,3,4,5,6,7,8,9,10];
squareNumbers(a); 