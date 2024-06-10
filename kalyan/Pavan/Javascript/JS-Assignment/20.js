function mergeAndSortArrays(arr1, arr2) {
    
    const mergedArray = [...arr1, ...arr2];
    
    
    mergedArray.sort((a, b) => a - b);
    
    return mergedArray;
  }
  
  
  const sortedArray1 = [1, 2, 3, 4, 5];
  const sortedArray2 = [6, 7, 9, 8, 10];
  const mergedSortedArray = mergeAndSortArrays(sortedArray1, sortedArray2);
  console.log(mergedSortedArray); 
  