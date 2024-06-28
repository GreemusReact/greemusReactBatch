console.log('Sort numbers');

function sortNumbers(arrays){
    console.log('The original array is : ', arrays)
   let result = arrays.sort();
   console.log('The ascending order of the array is : ',result);
}
sortNumbers([5,6,3,4,8,2]);