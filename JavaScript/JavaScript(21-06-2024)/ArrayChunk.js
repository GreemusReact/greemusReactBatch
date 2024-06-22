function chunkArray(arr, chunkSize) {
    let x = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        let y = arr.slice(i, i + chunkSize);
        x.push(y);
    }
    console.log("Given array is:");
    console.log(arr);
    console.log("After splitting into smaller arrays with size " + chunkSize + " is:");
    console.log(x);
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
chunkArray(a, 3);