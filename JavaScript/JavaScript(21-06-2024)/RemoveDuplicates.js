function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
            }
        });
        console.log("Given array is:");
        console.log(arr);
        console.log("Array after removing duplicates is:");
        console.log(unique);
}

var a = [7, 3, 9, 10, 4, 2, 7, 7, 5, 3, 9];
removeDuplicates(a);