function sortStringsAlphabetically(arr) {
    // Use the sort method to sort the array alphabetically
    const sortedArray = arr.slice().sort();
  
    return sortedArray;
  }
  
  // Example usage:
  const stringsArray = ["pavan", "kalyan", "javascript", "reactjs"];
  const sortedStringsArray = sortStringsAlphabetically(stringsArray);
  console.log(sortedStringsArray); 
  