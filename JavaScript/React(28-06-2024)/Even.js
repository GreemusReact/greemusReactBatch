function filterEvenNumbers(array) {
    let evens = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evens.push(array[i]);
        }
    }
    console.log("Given array is:");
    console.log(array);
    console.log("Even numbers in array are:");
    console.log(evens);
}

const a = [1,3,4,6,7,8,12,13,14];
filterEvenNumbers(a);