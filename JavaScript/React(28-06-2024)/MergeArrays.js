function mergeArrays(array1, array2) {
    let merge = array1.concat(array2);
    console.log("Given arrays are:");
    console.log(array1);
    console.log(array2);
    console.log("Merge of both arrays is :");
    console.log(merge);
}

const a = [1,2,3,4,5];
const b = [6,7,8,9,10];
mergeArrays(a, b);