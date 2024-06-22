function findLargest(arr){
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    console.log("Given array is: ");
    console.log(arr);
    console.log("Largest number in array is: " + largest);
}

var a = [10, 20, 11, 3, 52, 29, 30];
findLargest(a);