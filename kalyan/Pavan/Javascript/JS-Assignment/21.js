function countOccurrences(arr) {
    
    const occurrences = {};
  
    
    arr.forEach(item => {
      
      
      occurrences[item] = (occurrences[item] || 0) + 1;
    });
  
    return occurrences;
  }
  
  const stringsArray = ["pavan", "kalyan", "kalyan","java", "pavan", "pavan"];
  const occurrencesObject = countOccurrences(stringsArray);
  console.log(occurrencesObject);

  