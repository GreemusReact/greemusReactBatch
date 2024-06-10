function removeFalsyValues(arr) {
    return arr.filter(item => {
      return Boolean(item); 
    });
  }
  
  
  const array = [0, 1, false, 2, '', 3, null, undefined, 4, NaN];
  const filteredArray = removeFalsyValues(array);
  console.log(filteredArray); 