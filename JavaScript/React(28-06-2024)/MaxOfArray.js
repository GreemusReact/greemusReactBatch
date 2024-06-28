function findMax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Given array is :");
    console.log(arr);
    console.log("Maximum number in array is : " + max);
}

const a = [76,103,54,23,305,209,304];
findMax(a);