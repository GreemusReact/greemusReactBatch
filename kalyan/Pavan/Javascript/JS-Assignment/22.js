function removeDuplicates(arr) {
    
    const uniqueArray = arr.filter((item, index) => {
      
      return arr.indexOf(item) === index;
    });
  
    return uniqueArray;
  }
  
  const numbersArray = [1, 2, 3, 4, 2, 3, 5, 6, 1];
  const uniqueNumbersArray = removeDuplicates(numbersArray);
  console.log(uniqueNumbersArray); 
  