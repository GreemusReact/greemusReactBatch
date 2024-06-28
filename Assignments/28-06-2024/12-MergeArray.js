console.log('Merge Arrays');

function mergeArrays(arr1,arr2){
    console.log(arr1,arr2);
    let mergedArray = arr1.concat(arr2);
    console.log(mergedArray);
}
mergeArrays([1,2,3,4],[5,6,7,8]);